// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// All of this can be found when you set up firebase and can be copied from a single page
const firebaseConfig = {
  apiKey: "apiKey here",
  authDomain: "authDomain here",
  projectId: "projectId here",
  storageBucket: "storageBucket here",
  messagingSenderId: "messagingSenderId here",
  appId: "appId here",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app)
export const storage = getStorage(app);
