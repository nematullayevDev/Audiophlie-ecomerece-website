import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBSpGfVC1Z5bXuLmFRa6rZ7MminX0SBhs8",
    authDomain: "audiophile-4a3f1.firebaseapp.com",
    projectId: "audiophile-4a3f1",
    storageBucket: "audiophile-4a3f1.appspot.com",
    messagingSenderId: "962763137440",
    appId: "1:962763137440:web:f01f93fcf4da0606c0c4c5"
  };

// initiaize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()

export const db = getFirestore(app)

export { auth, googleProvider }