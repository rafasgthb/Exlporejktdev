// Import the functions you need from the SDKs you need
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js';
//import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDuBIkbBn1NDGk6ETm1mAbDDyQrkQIqKFE",
  authDomain: "explorejkt-8af4d.firebaseapp.com",
  projectId: "explorejkt-8af4d",
  storageBucket: "explorejkt-8af4d.appspot.com",
  messagingSenderId: "51495760559",
  appId: "1:51495760559:web:e083a07402ea46ac471a5a",
  measurementId: "G-VJHT5DG426"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

//const init = firebase.initializeApp(firebaseConfig);
export const firebaseAuthentication = getAuth(app);
//const analytics = getAnalytics(app);