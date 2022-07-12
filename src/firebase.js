// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// import { serverTimestamp } from "firebase/database"


const firebaseConfig = {
  apiKey: "AIzaSyCuf798sCHt2F9WfPqLCQjgTjP_X4tBqmg",
  authDomain: "finder-ca7de.firebaseapp.com",
  projectId: "finder-ca7de",
  storageBucket: "finder-ca7de.appspot.com",
  messagingSenderId: "587963349311",
  appId: "1:587963349311:web:ab5dad30cc55ae8c7afb8a",
  measurementId: "G-3RTQSG9GS5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export default app


