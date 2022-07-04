import { createContext, useEffect, useState, useContext } from "react";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    FacebookAuthProvider,
    GithubAuthProvider,
    onAuthStateChanged,
    signInWithRedirect,
    signOut
} from 'firebase/auth'
import { auth } from '../firebase'

const userAuthContext = createContext()

export const UserAuthContextProvider = ({ children }) => {
    const [user, setUser] = useState("")

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const facebookSignIn = () => {
        const facebookAuthProvider = new FacebookAuthProvider()
        return signInWithRedirect(auth, facebookAuthProvider)
    }

    const googleSignIn = () => {
        const googleAuthProvider = new GoogleAuthProvider()
        return signInWithRedirect(auth, googleAuthProvider)
    }

    const gitHubSignIn = () => {
        const gitHubAuthProvider = new GithubAuthProvider()
        return signInWithRedirect(auth, gitHubAuthProvider)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {unsubscribe()}
    }, [])

    return <userAuthContext.Provider value={{ user, signUp, signIn, facebookSignIn, googleSignIn, gitHubSignIn, logOut }}>{ children }</userAuthContext.Provider>
}

export const useUserAuth = () => {
    return useContext(userAuthContext)
}