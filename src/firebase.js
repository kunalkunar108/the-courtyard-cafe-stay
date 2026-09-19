import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase Web SDK configuration.
// These values are safe to use in client-side code; access control is enforced
// by Firebase Authentication and Firestore Security Rules.
const config = {
  apiKey: "AIzaSyDw0AMjzAqQ7rWGoyi60sqTKttpTRCG9-M",
  authDomain: "courtyard-cafe-stay.firebaseapp.com",
  projectId: "courtyard-cafe-stay",
  storageBucket: "courtyard-cafe-stay.firebasestorage.app",
  messagingSenderId: "886781275762",
  appId: "1:886781275762:web:632b0535b9699d054b5ceb",
};

export const firebaseConfigured = true;

const app = initializeApp(config);
export const auth = getAuth(app);
export const db = getFirestore(app);
