import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIKBxDrjSDnV3qzQIAFGWDLNM0RCTxmOE",
  authDomain: "mychatapp-f7a7d.firebaseapp.com",
  projectId: "mychatapp-f7a7d",
  storageBucket: "mychatapp-f7a7d.appspot.com",
  messagingSenderId: "825896808018",
  appId: "1:825896808018:web:e4dcb53a5f28fb860ab98b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);