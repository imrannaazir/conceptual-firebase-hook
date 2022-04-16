// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBR3I7c82A6NRPjX5j7XVwIr_XVCqP6ves",
    authDomain: "conceptual-react-firebase-hook.firebaseapp.com",
    projectId: "conceptual-react-firebase-hook",
    storageBucket: "conceptual-react-firebase-hook.appspot.com",
    messagingSenderId: "519332730148",
    appId: "1:519332730148:web:f8ee6aac86f9bbfab98fb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth