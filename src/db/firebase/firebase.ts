// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyDVyihT6YKfBHTx0ogIQUiEr9YWCUAuVE8",
    authDomain: "recovery-tracker-237c4.firebaseapp.com",
    projectId: "recovery-tracker-237c4",
    storageBucket: "recovery-tracker-237c4.firebasestorage.app",
    messagingSenderId: "132120908182",
    appId: "1:132120908182:web:02674c835bfa6ca58d0db7",
    measurementId: "G-JPKVYSL711"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const googleAuthProvider = new GoogleAuthProvider()