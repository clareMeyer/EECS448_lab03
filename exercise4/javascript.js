/*
javascript.js
Author: Clare Meyer
Lab: 03; Exercise: 04
functions accessed in main.html
 */

/*changes the background with input from text field with id="background"*/
/*called from the changeBoth() function*/
function changeBackground(){
  var back = document.getElementById("background").value;
  if((back == "red") || (back== "green") || (back == "blue")){
    document.getElementById("changeMe").style.backgroundColor=back;
  }
  else{
    alert("Must be red, green or blue");
  }
}

/*changes the border color with input from text field with id="border"*/
/*called from the changeBoth() function*/
function changeBorderColor(){
  var bord = document.getElementById("border").value;
  if((bord == "red") || (bord == "green") || (bord == "blue")){
    document.getElementById("changeMe").style.borderColor=bord;
  }
  else{
    alert("Must be red, green or blue");
  }
}

/*changes the width of the border with input from text field with id="widthy"*/
/*called from the changeBoth() function*/
function changeWidth(){
  var widthChange = document.getElementById("widthy").value;
  if(isNaN(widthChange)){
    alert("Must be a number");
  }
  else{
    document.getElementById("changeMe").style.borderWidth=widthChange+'px';
  }
}


/*implements the functions that change the background color, border color, and border width*/
function changeBoth(){
  changeBackground();
  changeBorderColor();
  changeWidth();
}
