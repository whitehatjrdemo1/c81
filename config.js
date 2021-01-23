import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyAvKdF902_SaxRMMkyRdbEIg4hitxwuNBY",
  authDomain: "booksanta-f1192.firebaseapp.com",
  projectId: "booksanta-f1192",
  storageBucket: "booksanta-f1192.appspot.com",
  messagingSenderId: "509265137968",
  appId: "1:509265137968:web:8e8a6e88b5424a82ad38f5",
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase.firestore();
