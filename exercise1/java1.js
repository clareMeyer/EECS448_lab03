/*
java1.js
Author: Clare Meyer
Lab: 03; Exercise: 01
functions for index.html
 */

//checks if passwords are the same and at least 8 characters
//called when validate button is hit from main.html
//takes in text values from main.html
function validate(){
  var passOne = document.getElementById("passOne").value;
  var passTwo = document.getElementById("passTwo").value;
  if(passOne.length>=8 && passOne == passTwo){
    alert("Great job picking a password");
  }
  else if(passOne.length<8 && passOne!=passTwo){
    alert("Passwords must match and be at least 8 characters")
  }
  else if(passOne.length<8){
    alert("Password must be 8 characters");
  }
  else if(passOne!=passTwo){
    alert("Passwords must match");
  }
}
