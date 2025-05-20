// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxRM09bYGiYdnSou3IkYJVLB6cT_YQRoU",
  authDomain: "freelance-task-app.firebaseapp.com",
  projectId: "freelance-task-app",
  storageBucket: "freelance-task-app.firebasestorage.app",
  messagingSenderId: "261497050393",
  appId: "1:261497050393:web:94915d3702130c13fba188"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);