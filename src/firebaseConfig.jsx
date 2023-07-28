import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBuY9DtJ_d6iWMcMTHnApgUV6b2Cm94kPs",
  authDomain: "expensetracker-64ede.firebaseapp.com",
  projectId: "expensetracker-64ede",
  storageBucket: "expensetracker-64ede.appspot.com",
  messagingSenderId: "569848463054",
  appId: "1:569848463054:web:b84b8b5f162d67d5801a9f"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)