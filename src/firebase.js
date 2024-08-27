 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAA4Mc5hXMgxElujXvJZ77AD13HckDqFDM",
  authDomain: "txr-project-55099.firebaseapp.com",
  projectId: "txr-project-55099",
  storageBucket: "txr-project-55099.appspot.com",
  messagingSenderId: "108819888520",
  appId: "1:108819888520:web:cd40252450b8fbf227a23d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Database
export const db = getFirestore(app);

// Cloud Storage

export const auth = getAuth(app)