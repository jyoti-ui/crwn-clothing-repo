import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDvg1rFKBF9CEb9oNLvju5X3j7xBWZ8HIQ",
    authDomain: "crown-db-1327b.firebaseapp.com",
    projectId: "crown-db-1327b",
    storageBucket: "crown-db-1327b.appspot.com",
    messagingSenderId: "118341946525",
    appId: "1:118341946525:web:68fc1c4fb182cf78bd5874",
    measurementId: "G-T7JMEMRZBZ"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt : 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

