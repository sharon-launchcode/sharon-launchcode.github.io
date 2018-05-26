var config = {
  apiKey: "xxxxx",
  authDomain: "xxxxx",
  databaseURL: "xxxxx",
  projectId: "xxxxx",
  storageBucket: "xxxxx",
  messagingSenderId: "xxxxx"
};
firebase.initializeApp(config);
/////
  // Initialize Firebase for Initial Intake Form
  var config3 = {
    apiKey: "AIzaSyAV4773DjZcMNbfQP5Wat0kYl1gHG-lepE",
    authDomain: "initialintakeform.firebaseapp.com",
    databaseURL: "https://initialintakeform.firebaseio.com",
    projectId: "initialintakeform",
    storageBucket: "initialintakeform.appspot.com",
    messagingSenderId: "51123204676"
  };

//////
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

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

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
