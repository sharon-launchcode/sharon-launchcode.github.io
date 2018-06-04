  // Initialize Firebase for Signup Form
  var config80461 = {
    apiKey: "AIzaSyCfaWkh2hB5hrXuaPVPKGhNuPVMwqIUIcQ",
    authDomain: "signup-80461.firebaseapp.com",
    databaseURL: "https://signup-80461.firebaseio.com",
    projectId: "signup-80461",
    storageBucket: "signup-80461.appspot.com",
    messagingSenderId: "719511873333"
  };
  firebase.initializeApp(config80461);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('signupForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var state = getInputVal('state');
  var password1 = getInputVal('password1');
  var password2 = getInputVal('password2');

  // Save message
  saveMessage(name, state, email, password1, password2);

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

    // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('signupForm').reset();
}

  
// Save message to firebase
function saveMessage(name, state, email, password1, password2){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    state:state,
    email:email,
    password1:password1,
    password2:password2
  }); 
}
