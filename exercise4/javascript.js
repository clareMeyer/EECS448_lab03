function changeBackground(){
  var back = document.getElementById("background").value;
  if((back == "red") || (back== "green") || (back == "blue")){
    document.getElementById("changeMe").style.backgroundColor=back;
  }
  else{
    alert("Must be red, green or blue");
  }
}
function changeBorderColor(){
  var bord = document.getElementById("border").value;
  if((bord == "red") || (bord == "green") || (bord == "blue")){
    document.getElementById("changeMe").style.borderColor=bord;
  }
  else{
    alert("Must be red, green or blue");
  }
}

function changeWidth(){

}

function changeBoth(){
  changeBackground();
  changeBorderColor();

  //changeWidth();
}
