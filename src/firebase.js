import * as firebase from "firebase";
import "firebase/database";

// let config = {
//   apiKey: "xxx",
//   authDomain: "bezkoder-firebase.firebaseapp.com",
//   databaseURL: "https://bezkoder-firebase.firebaseio.com",
//   projectId: "bezkoder-firebase",
//   storageBucket: "bezkoder-firebase.appspot.com",
//   messagingSenderId: "xxx",
//   appId: "xxx",
// };

let config = { 
  apiKey: "AIzaSyCkm291w41Hh9ST_mLd3b-oxR1f3Sjd8gY",
  authDomain: "h2fnote.firebaseapp.com",
  databaseURL: "https://h2fnote-default-rtdb.firebaseio.com",
  projectId: "h2fnote",
  storageBucket: "h2fnote.appspot.com",
  messagingSenderId: "813097034040",
  appId: "1:813097034040:web:519e3cc628d721f42661cd",
  measurementId: "G-DNG7BEFMTW"
};

firebase.initializeApp(config);

export default firebase.database();
