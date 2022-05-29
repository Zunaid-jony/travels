
import initializeFirebase from './../Components/Login/Firebase/firebase.init';
import { useState,useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword,signOut,onAuthStateChanged ,signInWithEmailAndPassword } from "firebase/auth";


initializeFirebase();
const useFirebase =() =>{
    const [user, setUser]= useState({});

    const auth =getAuth();

    const registerUser = (email, password) =>{
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
    }

    //********sign in************* */
    const loginUser = (email, password)=>{

      signInWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    }

    //******************************************************* */
    // starte changes objerb kare
useEffect(()=>{
 const  unsubscribe= onAuthStateChanged(auth, (user) => {
    if (user) {
     setUser(user);
      // ...
    } else {
      // User is signed out 
    }
  });
  return () => unsubscribe;
},[])


 const logout =()=>{
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
 }

    return{
        user,
        registerUser,
        logout,
        loginUser,
    }

}
export default useFirebase;