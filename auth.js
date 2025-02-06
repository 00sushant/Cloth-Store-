import { auth, provider } from './firebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

// Function to sign up a new user
const signup = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        console.error("Error signing up:", error);
        throw error;
    }
};

// Function to log in an existing user
const login = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
};

// Function for Google Sign-In
function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        console.log("User signed in with Google: ", user);
        // You can display user info here or navigate to the homepage
        displayUserInfo(user);
      })
      .catch((error) => {
        console.error("Error during Google Sign-In: ", error);
        alert("Something went wrong. Please try again.");
      });
  }