import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDf_-sRGZ0SwYptQpktffdNcqXADJKt2qQ",
  authDomain: "bill-splitter-1ddc3.firebaseapp.com",
  projectId: "bill-splitter-1ddc3",
  storageBucket: "bill-splitter-1ddc3.appspot.com",
  messagingSenderId: "30775754164",
  appId: "1:30775754164:web:4af2cff8e48a0c1d47c6e1",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { db, auth };
