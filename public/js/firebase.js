// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyCOr5r0sfD5gL9FHjUMqgRTWETX5VLX4VM",
  authDomain: "blog-website-ca78b.firebaseapp.com",
  projectId: "blog-website-ca78b",
  storageBucket: "blog-website-ca78b.appspot.com",
  messagingSenderId: "519305759768",
  appId: "1:519305759768:web:7254cbc113e6640e1b476d",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
