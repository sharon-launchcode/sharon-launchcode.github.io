  // Initialize Firebase for Initial Intake Form
  var config = {
    apiKey: "AIzaSyAV4773DjZcMNbfQP5Wat0kYl1gHG-lepE",
    authDomain: "initialintakeform.firebaseapp.com",
    databaseURL: "https://initialintakeform.firebaseio.com",
    projectId: "initialintakeform",
    storageBucket: "initialintakeform.appspot.com",
    messagingSenderId: "51123204676"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
