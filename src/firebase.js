// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyDhIUIWzzhkfojCvLdoBDxkEnPJMFAOlr4",
  authDomain: "store-finder-36111.firebaseapp.com",
  projectId: "store-finder-36111",
  storageBucket: "store-finder-36111.appspot.com",
  messagingSenderId: "719436321638",
  appId: "1:719436321638:web:69fe8f866101420a99eea7",
  measurementId: "G-Z0Q6MKX050",
  databaseURL: "https://store-finder-36111-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
const db = getFirestore(app)

// Get a list of cities from database

async function getCities(db) {
  const citiesCol = collection(db, 'cities')
  const citySnapshot = await getDocs(citiesCol)
  const cityList = citySnapshot.docs.map(doc => doc.data())
  return cityList
}
