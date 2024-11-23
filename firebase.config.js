import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2Ju4AxCK9UpXC9LN1X5w5pZm3J5dbl1s",
  authDomain: "recycle-121f9.firebaseapp.com",
  projectId: "recycle-121f9",
  storageBucket: "recycle-121f9.appspot.com",
  messagingSenderId: "1073202201049",
  appId: "1:1073202201049:web:d33dd778a5119fece619c8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Firebase Firestore and get a reference to the service
export const db = getFirestore(app);
