function buttonFunc(){
  //onmouseover
  //onmouseout
  //onload (when the page loads this is called)
  alert("yay called");
  var imageTag = document.getElementById("imgOne");
  imageTag.width=1000;
  imageTag.height=2000;
}

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
  //document.write(passOne);
  //if(passOne>=8 && passOne==passTwo){
  //  alert("got it done");
  //}
//  else{
  //  alert("uh no buddy");
  //}
}
