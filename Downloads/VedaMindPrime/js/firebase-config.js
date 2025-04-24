// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAa0tYT7Lj0Y1gd5kvLRlFQvd7TFQaL1jc",
  authDomain: "veda-mind.firebaseapp.com",
  databaseURL: "https://veda-mind-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "veda-mind",
  storageBucket: "veda-mind.firebasestorage.app",
  messagingSenderId: "302164256360",
  appId: "1:302164256360:web:3eb530a5008f74d22ebddd",
  measurementId: "G-WJMDQ2KG2R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);