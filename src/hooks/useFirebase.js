
import initializeFirebase from './../Components/Login/Firebase/firebase.init';
import { useState,useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword,signOut,onAuthStateChanged ,signInWithEmailAndPassword } from "firebase/auth";


initializeFirebase();
const useFirebase =() =>{
    const [user, setUser]= useState({});
    //spinar tta set karbo!
    const [isLoading, setIsLoading] = useState(true)

    const auth =getAuth();

    const registerUser = (email, password) =>{
      setIsLoading(true)
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
          })
          .finally(()=> setIsLoading(false));
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
    setIsLoading(false);
  });
  return () => unsubscribe;
},[])


 const logout =()=>{
   setIsLoading(true)
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  })
  .finally(()=> setIsLoading(false))
 }

    return{
        user,
        isLoading,
        registerUser,
        logout,
        loginUser,
    }

}
export default useFirebase;