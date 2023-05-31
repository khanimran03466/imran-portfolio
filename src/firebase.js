import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyD7pTAXPr9OuSh2Y1dl4LfruDo_PBj5rZc",
  authDomain: "imran-react-portfolio.firebaseapp.com",
  projectId: "imran-react-portfolio",
  storageBucket: "imran-react-portfolio.appspot.com",
  messagingSenderId: "845786307672",
  appId: "1:845786307672:web:7598b83f001f216ee5fe2d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(); 