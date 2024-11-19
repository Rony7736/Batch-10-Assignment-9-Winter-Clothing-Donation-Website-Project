import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/Firebase.config";

export const authContext = createContext()

const AuthProvider = ({ children }) => {

    // step 1
    const [user, setUser] = useState(null)
    // console.log(user);

    const [loading, setLoading] = useState(true)

    // step 2
    const handleRegister = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // step 5
    const handleLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // step 4
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // step 6
    const updateUSerProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }


    const authInfo = {
        user,
        setUser,
        handleRegister,
        handleLogin,
        logOut,
        updateUSerProfile,
        loading,
    }

    // step 3
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currectUser) => {
            setUser(currectUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])


    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;