// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI9sq4GUzItpiwCk9yAumiZZBPwVSGXm0",
  authDomain: "my-coffee-store-7e147.firebaseapp.com",
  projectId: "my-coffee-store-7e147",
  storageBucket: "my-coffee-store-7e147.firebasestorage.app",
  messagingSenderId: "447143072642",
  appId: "1:447143072642:web:5e259751877ad82f8a759b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);