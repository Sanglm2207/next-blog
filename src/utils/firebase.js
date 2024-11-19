// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY || "AIzaSyB01hNwA0VWCNzL_2ELNYlUy_m4gvcLnx8",
  authDomain: process.env.FIREBASE_AUTH_DOMAIN ||"nextjs-prod-d40d5.firebaseapp.com",
  projectId: process.env.FIREBASE_PROJECT_ID || "nextjs-prod-d40d5",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "nextjs-prod-d40d5.appspot.com",
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "243990910918",
  appId: process.env.FIREBASE_APP_ID || "1:243990910918:web:292fea6a48cc43d4d344c7",
  measurementId: process.env.FIREBASE_MEASUREMENT_ID || "G-JPLQVFHQH3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);