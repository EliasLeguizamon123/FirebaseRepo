function enviar(){
  var email = document.getElementById('email').value;
  var pass = document.getElementById('pass').value;
  //alert("email="+email+"pass="+pass);

  firebase.auth().createUserWithEmailAndPassword(email, pass)
  .catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  });
}
