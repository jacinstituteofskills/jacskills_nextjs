import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
   apiKey: "AIzaSyDtOZwJL17g7WRn82reyhi-l3xpV1sIZDM",
  authDomain: "jacskills-a4596.firebaseapp.com",
  projectId: "jacskills-a4596",
  storageBucket: "jacskills-a4596.firebasestorage.app",
  messagingSenderId: "162354009039",
  appId: "1:162354009039:web:034ca568de6aecfde1f8ba",
  measurementId: "G-ZL7HMMFDJ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
