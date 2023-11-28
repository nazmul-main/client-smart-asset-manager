/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from "firebase/auth";
import { app } from "../Config/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";
// import { auth } from "../Config/firebase.config";

export const AuthContext = createContext(null)

const googleprovider = new GoogleAuthProvider();
const auth = getAuth(app)


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({});
    console.log('user',user);
    const [loading, setLoading] = useState(true)
    const axiosPublic = useAxiosPublic()


    // google signin
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleprovider);
    }

    /* create user */
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // sign IN 
    const signin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    /* Update Pofile */
    const updateUaserPofile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })

    };

    const logout = () => {
        return signOut(auth)
    }





 /* User observe */
 useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    console.log('current user', currentUser.email);
    if (currentUser) {
      const userInfo = { email: currentUser?.email }
      axiosPublic.post('jwt', userInfo)
        .then(res => {
          if (res.data) {
            localStorage.setItem('access-token', res?.data?.token);
            setLoading(false);
          }

        })
    } else {
      localStorage.removeItem('access-token')
      setLoading(false);
    }

  });
  return () => {

    return unsubscribe();
  };
}, [axiosPublic]);

useEffect(() => {

  if(!user?.email){
    localStorage.removeItem('access-token')
  }

},[user]);




    const authentication = {
        createContext,
        googleLogin,
        createUser,
        signin,
        logout,
        user,
        loading,
        updateUaserPofile

    }

    return (
        <AuthContext.Provider value={authentication}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProvider;