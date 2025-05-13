// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtuJ2aIHChqYahiW6Q5lKui0PmXMcqYow",
  authDomain: "invoice-6557c.firebaseapp.com",
  projectId: "invoice-6557c",
  storageBucket: "invoice-6557c.firebasestorage.app",
  messagingSenderId: "969375819801",
  appId: "1:969375819801:web:65b016b7584f1338eae288",
  measurementId: "G-P0ZQ9GYHDD",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
