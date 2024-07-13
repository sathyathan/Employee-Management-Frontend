// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "employee-management-23559.firebaseapp.com",
  projectId: "employee-management-23559",
  storageBucket: "employee-management-23559.appspot.com",
  messagingSenderId: "274344147963",
  appId: "1:274344147963:web:177b00535f37ef7cba295e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);