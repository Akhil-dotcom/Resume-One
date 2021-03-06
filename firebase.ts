// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlPnrFpcG4fDaUezw5ocvAWxvqroiVG9w",
  authDomain: "resume-one-8b77a.firebaseapp.com",
  projectId: "resume-one-8b77a",
  storageBucket: "resume-one-8b77a.appspot.com",
  messagingSenderId: "425345955376",
  appId: "1:425345955376:web:ef06a4808ea458c6ca5ff5",
  measurementId: "G-N417M0G5NY"
};

// Initialize Firebase
// if no apps are initialized the initializeApp else initialize app
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }