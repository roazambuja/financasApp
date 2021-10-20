import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyCN5IjmaMBTMjhOVv9xoc5UujKADKf_CxI",
    authDomain: "financas-316cb.firebaseapp.com",
    projectId: "financas-316cb",
    storageBucket: "financas-316cb.appspot.com",
    messagingSenderId: "241710083919",
    appId: "1:241710083919:web:ae7344f247d71f4511df3a"
  };
  
  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  export default firebase;
