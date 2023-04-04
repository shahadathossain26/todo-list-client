// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCc-VcTGqJdqSh6eDagbZjqnEqSPogC4ug",
    authDomain: "dothat-a-todo-list-app.firebaseapp.com",
    projectId: "dothat-a-todo-list-app",
    storageBucket: "dothat-a-todo-list-app.appspot.com",
    messagingSenderId: "662290980736",
    appId: "1:662290980736:web:462aeb10c50204b023eb65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;