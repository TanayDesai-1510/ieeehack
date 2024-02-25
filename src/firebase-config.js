// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiTMZ41CSz2s0KeiUzLcHAjLmB0MTDldY",
  authDomain: "onestopieee.firebaseapp.com",
  projectId: "onestopieee",
  storageBucket: "onestopieee.appspot.com",
  messagingSenderId: "988705293620",
  appId: "1:988705293620:web:6d5127499416d020c55161",
  measurementId: "G-QXEMC5HSV0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);