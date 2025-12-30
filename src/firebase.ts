import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4g4hBpqlPnQzku2yMUacUyiKa-UducmA",
  authDomain: "internlink-platform.firebaseapp.com",
  projectId: "internlink-platform",
  storageBucket: "internlink-platform.appspot.com",
  messagingSenderId: "423872353106",
  appId: "1:423872353106:web:d0c8cce7b1b6ba8802208b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
