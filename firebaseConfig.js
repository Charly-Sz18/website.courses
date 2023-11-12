// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaZdqxSQ2suKDFtvSQZe3J4vZitpj3Wrs",
  authDomain: "courses-siteweb.firebaseapp.com",
  databaseURL: "https://courses-siteweb-default-rtdb.firebaseio.com",
  projectId: "courses-siteweb",
  storageBucket: "courses-siteweb.appspot.com",
  messagingSenderId: "460931663093",
  appId: "1:460931663093:web:553cab928bfb9b4574b1bc"
};

initializeApp(firebaseConfig);

const auth = getAuth()

export {auth};