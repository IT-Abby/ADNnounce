// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithCustomToken, signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';
import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTBXOmr0OOQTE-Xu9JOcnLDn4CSc4ne7s",
  authDomain: "edsa-451812.firebaseapp.com",
  projectId: "edsa-451812",
  storageBucket: "edsa-451812.firebasestorage.app",
  messagingSenderId: "750615580965",
  appId: "1:750615580965:web:48ac149faa7b614b188acc",
  measurementId: "G-FJ8NV2D90M"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

 const auth = getAuth(app);
 const db = getFirestore(app);



 export {auth, signInWithCustomToken, signInWithEmailAndPassword, onAuthStateChanged, db, getDocs,getDoc, doc, firestore, collection}