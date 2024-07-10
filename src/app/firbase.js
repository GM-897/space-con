// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTmL6jgljht5GoEGt0QwkD618uAFrzhxE",
    authDomain: "space-con-e5ed8.firebaseapp.com",
    projectId: "space-con-e5ed8",
    storageBucket: "space-con-e5ed8.appspot.com",
    messagingSenderId: "1032469651646",
    appId: "1:1032469651646:web:2c16d0cfb1ece5ddec3eef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);