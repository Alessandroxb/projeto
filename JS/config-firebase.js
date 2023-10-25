import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js"

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js"


  // Import the functions you need from the SDKs you need
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA4PtDKGTJfu8go0ySiO79rJsqVBhd-W_c",
    authDomain: "projetotarefa-5d5b4.firebaseapp.com",
    projectId: "projetotarefa-5d5b4",
    storageBucket: "projetotarefa-5d5b4.appspot.com",
    messagingSenderId: "851793480979",
    appId: "1:851793480979:web:f4916a1bd8a023d0631ee6"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);