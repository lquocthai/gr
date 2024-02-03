// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4eGjVqPBLYti8TNlrM7ZW-XKPouA6rzs",
  authDomain: "group-96bf7.firebaseapp.com",
  projectId: "group-96bf7",
  storageBucket: "group-96bf7.appspot.com",
  messagingSenderId: "501414949589",
  appId: "1:501414949589:web:c14fabfa4b21a895e9e85c",
  measurementId: "G-MFREELHCB6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);