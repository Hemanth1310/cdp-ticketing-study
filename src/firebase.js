// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAig9sJCyqYKKj3aw_on-6yipXkbnKfLG8",
  authDomain: "cdp-ticketing-interface-study.firebaseapp.com",
  databaseURL: "https://cdp-ticketing-interface-study-default-rtdb.firebaseio.com",
  projectId: "cdp-ticketing-interface-study",
  storageBucket: "cdp-ticketing-interface-study.firebasestorage.app",
  messagingSenderId: "168244794290",
  appId: "1:168244794290:web:79a709e90610c36053caab",
  measurementId: "G-FD13JVX3NS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const database = getDatabase(app);