// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCLOLtrmhqfQ0H0WDRPyXTZ_ZVjylOqZig",
    authDomain: "house-marketplace-app-1cf6b.firebaseapp.com",
    projectId: "house-marketplace-app-1cf6b",
    storageBucket: "house-marketplace-app-1cf6b.appspot.com",
    messagingSenderId: "200169810761",
    appId: "1:200169810761:web:c70e95034131aa3fb8c898",
    measurementId: "G-DJ34DT5GMB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();