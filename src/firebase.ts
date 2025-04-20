import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-INf6yQRL0nTDCm9doH9odTJhm00mA9A",
  authDomain: "rabbit-sign-and-log-in.firebaseapp.com",
  projectId: "rabbit-sign-and-log-in",
  storageBucket: "rabbit-sign-and-log-in.firebasestorage.app",
  messagingSenderId: "637416023903X",
  appId: "1:637416023903:web:aad2e39c8b656b4043f8ea"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
