// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChMupEGNoDbxtqtlqZjm4T-6il_mfeCM4",
  authDomain: "smart-asset-managment.firebaseapp.com",
  projectId: "smart-asset-managment",
  storageBucket: "smart-asset-managment.appspot.com",
  messagingSenderId: "510393948261",
  appId: "1:510393948261:web:b0058bf608cdd5b2cc4e8c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);