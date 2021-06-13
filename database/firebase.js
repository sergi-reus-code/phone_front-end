
import firebase from "firebase";

import 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyCbu5SB_Nmsi7H5EkSRLhMKWEyuDLPkzlA",
    authDomain: "inote-dev-2022.firebaseapp.com",
    projectId: "inote-dev-2022",
    storageBucket: "inote-dev-2022.appspot.com",
    messagingSenderId: "818755126661",
    appId: "1:818755126661:web:f12d381653c6350d36f0ec",
    measurementId: "G-SJ63ESCZ1F"
  };
  
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  const db = firebase.firestore();




  export default {
      firebase,
      db
  }