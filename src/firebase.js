 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "txr-project-55099.firebaseapp.com",
  projectId: "txr-project-55099",
  storageBucket: "txr-project-55099.appspot.com",
  messagingSenderId: "108819888520",
  appId: "1:108819888520:web:cd40252450b8fbf227a23d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)