import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail 
} from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGE_SENDER_ID,
  appId: import.meta.env.VITE_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const handleGoogleSignIn = async (setError) => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log("Google sign-in successful:", result.user);
    setError("");
    return result.user;
  } catch (error) {
    console.error(error);
    setError("Google sign-in failed");
  }
};

const handleSignUp = async (e, setError, email , password) => {
  e.preventDefault();
  // const email = e.target.email.value;
  // const password = e.target.password.value;

  try {
    const userCred = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User created:", userCred.user);
    setError("");
    return userCred.user;
  } catch (error) {
    console.error(error);
    setError("Sign up failed");
  }
};

const handleSignIn = async (e, setError, email , password) => {
  e.preventDefault();
  // const email = e.target.email.value;
  // const password = e.target.password.value;

  try {
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    console.log("User signed in:", userCred.user);
    setError("");
    return userCred.user;
  } catch (error) {
    console.error(error);
    setError("Sign in failed");
  }
};

const passwordReset = (email) => {
  sendPasswordResetEmail( auth , email);
}

export { auth, googleProvider, handleGoogleSignIn, handleSignUp, handleSignIn, passwordReset };
