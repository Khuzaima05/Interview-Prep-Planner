import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW_nOeTlgWBTYZtvs8JbzkOnoJE14QJJA",
  authDomain: "interview-prep-planner.firebaseapp.com",
  projectId: "interview-prep-planner",
  storageBucket: "interview-prep-planner.firebasestorage.app",
  messagingSenderId: "585221947788",
  appId: "1:585221947788:web:c659fb60145d6e80bae071",
  measurementId: "G-G1ELZ2MMPR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore Database
export const db = getFirestore(app);

// Initialize Authentication
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default app;

// Made with Bob
