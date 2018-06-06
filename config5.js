  var config5 = {
    apiKey: "AIzaSyBlY3OteC7Dn0y0diemxPlg62XgVMqkCHg",
    authDomain: "signin-fcc07.firebaseapp.com",
    projectId: "signin-fcc07",
    databaseURL: "https://signin-fcc07.firebaseio.com",
    storageBucket: "signin-fcc07.appspot.com",
    messagingSenderId: "612057419132"
  };

  const database = firebase.database()
  // From docs: Get a reference to the database service
  // From docs: var database = firebase.database();
  
  //From the tutorial -- find out about promise https://dev.to/aurelkurtula/introduction-to-authentication-with-firebase-bkd
  const promise = auth.signInWithEmailAndPassword(email, pass);
  auth.createUserWithEmailAndPassword(email, pass);

//below facebook and github are from the tutorial -- not implemented but saved for reference on how to handle
//const facebookProvider = new firebase.auth.FacebookAuthProvider();
//const facebookPromise = auth.signInWithPopup(facebookProvider)
//const githubProvider = new firebase.auth.GithubAuthProvider();
//const githubPromise = firebase.auth().signInWithPopup(githubProvider);

firebase.auth().onAuthStateChanged()
//creates user IMPORTANT does not validate

document.getElementById("btnSignUp").addEventListener('click', e=>{
  const email = document.getElementById("txtEmail").value;
  const pass = document.getElementById("txtPassword").value;
  firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
   console.log(error.message);
  });
})
//sign in users that have already been created
document.getElementById("btnLogin").addEventListener('click', e=>{
  const email = document.getElementById("txtEmail").value;
  const pass = document.getElementById("txtPassword").value;
  const promise = firebase.auth().signInWithEmailAndPassword(email, pass);
  promise.catch(e=>{ console.log(e.massage)})
})
 
firebase.auth().onAuthStateChanged(user=>{ 
  if(user){
    document.getElementById("btnLogOut").classList.remove('hide')
  } else{
    document.getElementById("btnLogOut").classList.add('hide')
  }
})
document.getElementById("btnLogOut").addEventListener('click', e=>{
  firebase.auth().signOut();
  console.log('logged out')
})
