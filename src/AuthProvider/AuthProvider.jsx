import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../Firebase/Firebase.config";

export const authContext = createContext()

const AuthProvider = ({ children }) => {

    // step 1
    const [user, setUser] = useState(null)
    console.log(user);

    // step 2
    const handleRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // step 5
    const handleLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // step 4
    const logOut = ()=> {
        return signOut(auth)
    }


    const authInfo = {
        user,
        setUser,
        handleRegister,
        handleLogin,
        logOut
    }

    // step 3
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currectUser) => {
            setUser(currectUser)
        })
        return ()=> {
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