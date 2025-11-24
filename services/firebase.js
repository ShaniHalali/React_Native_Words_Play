// Initialize Firebase for Expo managed workflow
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3Oi3CxYxAHYdrCu9ASRrH1_i6-m5G2-U",
  authDomain: "words-game-react-native.firebaseapp.com",
  projectId: "words-game-react-native",
  storageBucket: "words-game-react-native.firebasestorage.app",
  messagingSenderId: "1009250524004",
  appId: "1:1009250524004:web:2ee6aab00401c1c834b871",
  measurementId: "G-ZHCGXPMCF7"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
