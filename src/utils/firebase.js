// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyx3CnNs-lrh_RRZuUNB-labuDYJEtGjE",
  authDomain: "netflixgpt-6ea25.firebaseapp.com",
  projectId: "netflixgpt-6ea25",
  storageBucket: "netflixgpt-6ea25.appspot.com",
  messagingSenderId: "217001586024",
  appId: "1:217001586024:web:4b7acbd0273834808cbadd",
  measurementId: "G-D5D65KSEL2"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



export const auth = getAuth();