// Import the function you need from the SDKs you need.
import { initializeApp } from "@firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    // Provide app configs here.
}

// Initialize Firebase

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export default app 



