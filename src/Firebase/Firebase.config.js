// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFof0aROajXKP9pz0mc0XvTLDGeErUDrw",
  authDomain: "winter-clothing-donation-2956f.firebaseapp.com",
  projectId: "winter-clothing-donation-2956f",
  storageBucket: "winter-clothing-donation-2956f.firebasestorage.app",
  messagingSenderId: "86342113132",
  appId: "1:86342113132:web:e696189d2a345eca494549"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth