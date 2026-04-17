import { useState, useEffect } from "react";
import { useAuth } from "./AuthProvider";
import { saveUserData, getUserData, subscribeToUserData, migrateLocalStorageToFirestore } from "./firebaseService";
import LoginScreen from "./LoginScreen";
import App from "./App";

export default function AppWithFirebase() {
  const { user, logout } = useAuth();
  const [dataLoaded, setDataLoaded] = useState(false);
  const [syncing, setSyncing] = useState(false);
  const [userData, setUserData] = useState(null);

  // Load data from Firebase when user logs in
  useEffect(() => {
    if (!user) {
      setDataLoaded(false);
      setUserData(null);
      return;
    }

    async function loadUserData() {
      try {
        setSyncing(true);
        const data = await getUserData(user.uid);
        
        if (data) {
          // Load data from Firestore
          setUserData(data);
        } else {
          // First time user - migrate localStorage data if exists
          const hasLocalData = localStorage.getItem("prep-planner-day");
          if (hasLocalData) {
            const migratedData = await migrateLocalStorageToFirestore(user.uid);
            setUserData(migratedData);
          } else {
            // New user with no data
            setUserData({
              day: 1,
              completed: {},
              notesByDay: {},
              codeByDay: {},
              watchedResources: {},
              calendarFilter: "all",
              completedDays: {}
            });
          }
        }
        
        setDataLoaded(true);
      } catch (error) {
        console.error('Error loading user data:', error);
        alert('Failed to load your data. Please refresh the page.');
      } finally {
        setSyncing(false);
      }
    }

    loadUserData();

    // Subscribe to real-time updates
    const unsubscribe = subscribeToUserData(user.uid, (data) => {
      if (data && dataLoaded) {
        setUserData(data);
      }
    });

    return () => unsubscribe();
  }, [user, dataLoaded]);

  // Save data to Firebase whenever it changes
  const saveData = async (newData) => {
    if (!user || !dataLoaded) return;

    try {
      const dataToSave = {
        ...newData,
        lastUpdated: new Date().toISOString()
      };
      await saveUserData(user.uid, dataToSave);
      setUserData(dataToSave);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  // Show login screen if not authenticated
  if (!user) {
    return <LoginScreen />;
  }

  // Show loading state while data is being loaded
  if (!dataLoaded || !userData) {
    return (
      <div className="app-shell">
        <div className="loading-screen">
          <div className="loading-spinner"></div>
          <p>Loading your data...</p>
        </div>
      </div>
    );
  }

  // Render main app with Firebase data and save function
  return (
    <div className="app-container">
      <div className="user-header">
        <div className="user-info">
          <img src={user.photoURL} alt={user.displayName} className="user-avatar" />
          <span className="user-name">{user.displayName}</span>
          {syncing && <span className="sync-indicator">Syncing...</span>}
        </div>
        <button className="logout-button" onClick={logout}>
          Sign Out
        </button>
      </div>
      <App initialData={userData} onDataChange={saveData} />
    </div>
  );
}

// Made with Bob
