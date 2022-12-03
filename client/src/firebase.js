// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc7NdBBbrKarZ7wI_JLJnu97jGvjBu6KM",
  authDomain: "prjrde.firebaseapp.com",
  projectId: "prjrde",
  storageBucket: "prjrde.appspot.com",
  messagingSenderId: "859611825619",
  appId: "1:859611825619:web:752144007314e0156b1b26"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//Authntocation
export const auth = getAuth();
//upload/storage
export const storage = getStorage();
//Database
export const db = getFirestore();