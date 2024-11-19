import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../Firebase/Firebase.config";

export const authContext = createContext()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    console.log(user);

    // step 1
    const handleRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // const handleLogin = (email, password) => {
    //     return signInWithEmailAndPassword(auth, email, password)
    // }

    // step 3
    const logOut = ()=> {
        return signOut(auth)
    }


    const authInfo = {
        user,
        setUser,
        handleRegister,
        // handleLogin,
        // loginUser,
        logOut
    }

    // step 2
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