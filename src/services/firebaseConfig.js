import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyD6OdJLCAabAvn6W67vOtedZBvhIh7JV-s",
  authDomain: "musicas-5acd8.firebaseapp.com",
  projectId: "musicas-5acd8",
  storageBucket: "musicas-5acd8.firebasestorage.app",
  messagingSenderId: "136331303391",
  appId: "1:136331303391:web:f95216f3d5cfaaf1160c6a"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
