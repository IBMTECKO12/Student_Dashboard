import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtGdXqBUnjyKp8cZVHNULzdcr9eoeMvug",
  authDomain: "student-dashboard-91c16.firebaseapp.com",
  projectId: "student-dashboard-91c16",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);