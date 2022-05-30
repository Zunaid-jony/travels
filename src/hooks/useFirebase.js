
import initializeFirebase from './../Components/Login/Firebase/firebase.init';
import { useState,useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword,signOut,onAuthStateChanged, signInWithPopup ,signInWithEmailAndPassword,GoogleAuthProvider } from "firebase/auth";


initializeFirebase();
const useFirebase =() =>{
    const [user, setUser]= useState({});
    //spinar tta set karbo!
    const [isLoading, setIsLoading] = useState(true)

    const auth =getAuth();
    const googleprovider = new GoogleAuthProvider();
// Register user *****************************
    const registerUser = (email,name, password,location, history) =>{
      setIsLoading(true)
        createUserWithEmailAndPassword(auth,email,password,name)
        .then((userCredential) => {
          const destination = location?.state?.from || '/';
      history(destination, {replace: true});
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
    const loginUser = (email, password , location, history)=>{
      //console.log( "From useFirebase: ", {location}, {history})
     setIsLoading(true);

      signInWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
      const destination = location?.state?.from || '/';
      history(destination, {replace: true});
      
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    }
    //*************google  */
    const signInWithGoogle =(location,history) =>{
      setIsLoading(true)
      signInWithPopup(auth, googleprovider )
      .then((result) => {
        const destination = location?.state?.from || '/';
      history(destination, {replace: true});
        // This gives you a Google Access Token. You can use it to access the Google API.
        
        const user = result.user;
        // ...
      }).catch((error) => {
       
        const errorMessage = error.message;
      })
      .finally(()=> setIsLoading(false));
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
        signInWithGoogle,
    }

}
export default useFirebase;