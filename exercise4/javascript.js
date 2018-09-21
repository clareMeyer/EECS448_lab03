var paragraph= document.getElementById("changeMe");
var border = document.getElementById("border").value;
var background = document.getElementById("background").value;

function changeBorderColor(){
  //document.write(border);
  //if((border == "red") || (border == "green") || (border == "blue")){
    alert("called it");
    document.getElementById("changeMe").style.backgroundColor="blue";
  //}
  //else{
  //  alert("Must be red, green or blue");
  //}
}

function changeBackground(){
  if((background.value != "red") || (background.value!= "green") || (background.value != "blue")){
    alert("Must be red, green or blue");
  }
  else{
    paragraph.style.backgroundColor = background.value;
  }
}

function changeWidth(){

}

function changeBoth(){
  changeBorderColor();
  //changeBackground();
  //changeWidth();
}
