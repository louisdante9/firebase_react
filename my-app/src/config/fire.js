import firebase from 'firebase/app';
import 'firebase/auth';
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB29UTgUadXdVXcakdZ0LimL06HdZdqapE",
    authDomain: "my-firebase-react-app.firebaseapp.com",
    databaseURL: "https://my-firebase-react-app.firebaseio.com",
    projectId: "my-firebase-react-app",
    storageBucket: "my-firebase-react-app.appspot.com",
    messagingSenderId: "354932373163"
  };
  const fire = firebase.initializeApp(config);
  

  export default fire;