import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 apiKey: "AIzaSyBAYBnaQDqznYj-sgYsdEzkyIWcOrOddnc",
  authDomain: "complaint-forum-b094f.firebaseapp.com",
  projectId: "complaint-forum-b094f",
  storageBucket: "complaint-forum-b094f.appspot.com",
  messagingSenderId: "289982667292",
  appId: "1:289982667292:web:3f2607de9aa6b1aff51dd9"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

