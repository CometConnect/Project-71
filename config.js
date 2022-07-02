import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyBREVe18wGvu6FQZ9baLzR-fXh9NmZQKuU",
  authDomain: "pro-c71-7dc47.firebaseapp.com",
  projectId: "pro-c71-7dc47",
  storageBucket: "pro-c71-7dc47.appspot.com",
  messagingSenderId: "815202898412",
  appId: "1:815202898412:web:49cb56b08a14ae526130c9"
};
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
