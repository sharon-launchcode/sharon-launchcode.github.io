
  var config5 = {
    apiKey: "AIzaSyBlY3OteC7Dn0y0diemxPlg62XgVMqkCHg",
    authDomain: "signin-fcc07.firebaseapp.com",
    databaseURL: "https://signin-fcc07.firebaseio.com",
    projectId: "signin-fcc07",
    storageBucket: "signin-fcc07.appspot.com",
    messagingSenderId: "612057419132"
  };
  const database = firebase.database()
  // From docs: Get a reference to the database service
  // From docs: var database = firebase.database();
  
  function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}
