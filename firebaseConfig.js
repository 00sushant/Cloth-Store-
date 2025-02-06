import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAUo0SUquTDjwUPmUXMwvc9HKMUIBv3pXI",
    authDomain: "cloth-store-fdacf.firebaseapp.com",
    projectId: "cloth-store-fdacf",
    storageBucket: "cloth-store-fdacf.firebasestorage.app",
    messagingSenderId: "339076363923",
    appId: "1:339076363923:web:62355810a79a8619467f66",
    measurementId: "G-XDX4153TM4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
