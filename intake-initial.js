  // Initialize Firebase for Initial Intake Form
  var config3 = {
    apiKey: "AIzaSyAV4773DjZcMNbfQP5Wat0kYl1gHG-lepE",
    authDomain: "initialintakeform.firebaseapp.com",
    databaseURL: "https://initialintakeform.firebaseio.com",
    projectId: "initialintakeform",
    storageBucket: "initialintakeform.appspot.com",
    messagingSenderId: "51123204676"
  };
firebase.initializeApp(config3);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var dateOfBirth = getInputVal('dateOfBirth');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var state = getInputVal('state');

  // Save message
  saveMessage(name, dateOfBirth, email, phone, state);

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, dateOfBirth, email, phone, state){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:dateOfBirth,
    email:email,
    phone:phone,
    message:state
  }); 
}
