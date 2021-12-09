// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMeGk7W7zbV-iQmy9g339it5r4bYR0H9U",
  authDomain: "react-proj-38b23.firebaseapp.com",
  projectId: "react-proj-38b23",
  storageBucket: "react-proj-38b23.appspot.com",
  messagingSenderId: "868875086616",
  appId: "1:868875086616:web:43aed5ea220654c1210c6d",
  measurementId: "G-1N9RJ4DZ5E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line
const analytics = getAnalytics(app);
//