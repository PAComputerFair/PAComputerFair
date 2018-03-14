$(document).ready(function(){

var config = {
    apiKey: "AIzaSyBghq3gIiX20kFZYP0PEpgqXKDOEY8Z9Hc",
    authDomain: "computerfair-ab4cd.firebaseapp.com",
    databaseURL: "https://computerfair-ab4cd.firebaseio.com",
    projectId: "computerfair-ab4cd",
    storageBucket: "",
    messagingSenderId: "616328185985"
  };
  firebase.initializeApp(config);
  
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignup = document.getElementById('btnSignup');
  const btnLogout = document.getElementById('btnLogout');
  
  btnLogin.addEventListener('click', e=>{
      const email = txtEmail.value;
      const pass = txtPassword.value;
      const auth = firebase.auth();
      
      const promise = auth.signInWithEmailAndPassword(email,pass);
      promise.catch(e => console.log(e.message));
      
  });
   btnSignup.addEventListener('click', e=>{
       //check for real email
      const email = txtEmail.value;
      const pass = txtPassword.value;
      const auth = firebase.auth();
      
      const promise = auth.createUserWithEmailAndPassword(email,pass);
      promise.catch(e => console.log(e.message));
      
  });
  btnLogout.addEventListener('click',e=>{
     firebase.auth().signOut(); 
  });
  
    firebase.auth().onAuthStateChanged(firebaseUser=>{
        if(firebaseUser){
            console.log(firebaseUser);
            btnLogout.classList.remove('hide');
        }else{
            console.log("not logged in");
            btnLogout.classList.add('hide');
        }
    });
});