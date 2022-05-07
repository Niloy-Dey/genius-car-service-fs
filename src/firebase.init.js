// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBb-44fGwjRFdbz4-1zLtsHQ-pJ0VmesqU",
  authDomain: "genius-cart-services-ad5e1.firebaseapp.com",
  projectId: "genius-cart-services-ad5e1",
  storageBucket: "genius-cart-services-ad5e1.appspot.com",
  messagingSenderId: "382371169901",
  appId: "1:382371169901:web:4f308902532d7ed1a42164"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;