import { db } from './firebase';
import { doc, setDoc, getDoc, onSnapshot } from 'firebase/firestore';

// Save user data to Firestore
export async function saveUserData(userId, data) {
  try {
    await setDoc(doc(db, 'users', userId), data, { merge: true });
  } catch (error) {
    console.error('Error saving data:', error);
    throw error;
  }
}

// Get user data from Firestore
export async function getUserData(userId) {
  try {
    const docRef = doc(db, 'users', userId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error getting data:', error);
    throw error;
  }
}

// Subscribe to real-time updates
export function subscribeToUserData(userId, callback) {
  const docRef = doc(db, 'users', userId);
  
  return onSnapshot(docRef, (doc) => {
    if (doc.exists()) {
      callback(doc.data());
    }
  }, (error) => {
    console.error('Error in subscription:', error);
  });
}

// Migrate localStorage data to Firestore
export async function migrateLocalStorageToFirestore(userId) {
  const storageKeys = {
    day: "prep-planner-day",
    completed: "prep-planner-completed",
    notesByDay: "prep-planner-notes-by-day",
    codeByDay: "prep-planner-code-by-day",
    watchedResources: "prep-planner-watched-resources",
    calendarFilter: "prep-planner-calendar-filter",
    completedDays: "prep-planner-completed-days"
  };

  const localData = {
    day: Number(localStorage.getItem(storageKeys.day)) || 1,
    completed: JSON.parse(localStorage.getItem(storageKeys.completed) || '{}'),
    notesByDay: JSON.parse(localStorage.getItem(storageKeys.notesByDay) || '{}'),
    codeByDay: JSON.parse(localStorage.getItem(storageKeys.codeByDay) || '{}'),
    watchedResources: JSON.parse(localStorage.getItem(storageKeys.watchedResources) || '{}'),
    calendarFilter: localStorage.getItem(storageKeys.calendarFilter) || 'all',
    completedDays: JSON.parse(localStorage.getItem(storageKeys.completedDays) || '{}'),
    lastUpdated: new Date().toISOString()
  };

  try {
    await saveUserData(userId, localData);
    return localData;
  } catch (error) {
    console.error('Error migrating data:', error);
    throw error;
  }
}

// Made with Bob
