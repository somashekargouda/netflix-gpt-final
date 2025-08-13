// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7JZ6q4LWLX7JQKN5fb2n3unJVkpQMrVQ",
  authDomain: "netflixgpt-ceaf5.firebaseapp.com",
  projectId: "netflixgpt-ceaf5",
  storageBucket: "netflixgpt-ceaf5.firebasestorage.app",
  messagingSenderId: "496353456880",
  appId: "1:496353456880:web:368ba905964696b258c835",
  measurementId: "G-S62BYJNQ3S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
