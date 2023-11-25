/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../Config/firebase.config";
// import { auth } from "../Config/firebase.config";

export const AuthContext = createContext(null)

const googleprovider = new GoogleAuthProvider();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({});
    console.log(user);
    const [loading, setLoading] = useState(true)



    // google signin
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleprovider);
    }

    // sign up
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign IN 
    const signin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }

    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }



   /* Currrent user / using observer */
   useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        setUser(user);
        setLoading(false)
    });
}, []);

   
    





    const authentication = {
        createContext,
        googleLogin,
        createUser,
        signin,
        logout,
        user,
        loading,
        handleUpdateProfile

    }

    return (
        <AuthContext.Provider value={authentication}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProvider;