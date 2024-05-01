import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setloading] = useState(true);

  const createUser = (email,password)=>{
    setloading(true);
    return createUserWithEmailAndPassword(auth,email,password);
  }
 const SignIn = (email,password)=>{
    setloading(true);
   return signInWithEmailAndPassword
 }
 useEffect(()=>{
    const unSubscribe =onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        console.log('current user',currentUser);
        setloading(false);
    });
    return()=>{
        return unSubscribe();
    }
 })
  const authInfo = {
    user,
    loading,
    createUser,
    SignIn
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
