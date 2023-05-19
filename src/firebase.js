// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyD6mcmrYz6OheFU0YfM87W3TLOOjUGtoog",
  authDomain: "portfolio-dashboard-fbdb0.firebaseapp.com",
  projectId: "portfolio-dashboard-fbdb0",
  storageBucket: "portfolio-dashboard-fbdb0.appspot.com",
  messagingSenderId: "791869158888",
  appId: "1:791869158888:web:556d6adebbbff88616205d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app)
export const storage = getStorage(app);
