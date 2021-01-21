import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyChSYMkNmoyW2V8Py4D63eyAPxf2IhjDpo",
    authDomain: "myproject-2163b.firebaseapp.com",
    projectId: "myproject-2163b",
    storageBucket: "myproject-2163b.appspot.com",
    messagingSenderId: "517762817057",
    appId: "1:517762817057:web:a2fcf9cf862c920d345760",
    measurementId: "G-4CCDHY443Q"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;