import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyB2QYK3LzF6DGB9lTKPBy1Q9leLK9Y0saQ",
  authDomain: "imessagecloneapp.firebaseapp.com",
  databaseURL: "https://imessagecloneapp.firebaseio.com",
  projectId: "imessagecloneapp",
  storageBucket: "imessagecloneapp.appspot.com",
  messagingSenderId: "56504579166",
  appId: "1:56504579166:web:17de50788f48a83715f0cf",
  measurementId: "G-ZMWNRP423H"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;