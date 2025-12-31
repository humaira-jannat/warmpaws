import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCSYreFXpuFv090iQe2iFq24jAQA1Pwnuk",
  authDomain: "warmpaws-80ffc.firebaseapp.com",
  projectId: "warmpaws-80ffc",
  storageBucket: "warmpaws-80ffc.appspot.com",
  messagingSenderId: "257549534484",
  appId: "1:257549534484:web:dff5a6b7a82a261625ee01",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
