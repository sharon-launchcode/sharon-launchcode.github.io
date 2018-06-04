  // Initialize Firebase for Initial Intake Form
  var configfcc07 = {
    apiKey: "AIzaSyBlY3OteC7Dn0y0diemxPlg62XgVMqkCHg",
    authDomain: "signin-fcc07.firebaseapp.com",
    databaseURL: "https://signin-fcc07.firebaseio.com",
    projectId: "signin-fcc07",
    storageBucket: "signin-fcc07.appspot.com",
    messagingSenderId: "612057419132"
  };
  firebase.initializeApp(configfcc07);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('signinForm').addEventListener('submit', submitForm);

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
  document.getElementById('signinForm').reset();
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
