// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCCOEHw6QQ7rpbYtiqqsZyxM1bQ_AweLMQ",
    authDomain: "gr8numb3rstasklist.firebaseapp.com",
    projectId: "gr8numb3rstasklist",
    storageBucket: "gr8numb3rstasklist.appspot.com",
    messagingSenderId: "755410376709",
    appId: "1:755410376709:web:daf0fe9fd1bba80137a46c",
    databaseURL: "https://gr8numb3rstasklist-default-rtdb.firebaseio.com",
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
  
  // Make the `db` object accessible globally
  window.db = db;
  