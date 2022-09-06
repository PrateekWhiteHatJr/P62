 import firebase from "firebase";

//initialize your database
const firebaseConfig = {
  apiKey: "AIzaSyB4ZrY3z2PVdGigAfBxSIatDH5mB4feVMY",
  authDomain: "c-60-514f4.firebaseapp.com",
  databaseURL: "https://c-60-514f4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "c-60-514f4",
  storageBucket: "c-60-514f4.appspot.com",
  messagingSenderId: "102492675604",
  appId: "1:102492675604:web:8b872f38553f6215839101"
};


if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
export default firebase.database()

  