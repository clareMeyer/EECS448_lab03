function changeBorderColor(){
  //document.write(border);
  //if((border == "red") || (border == "green") || (border == "blue")){
  //var paragraph= document.getElementById("changeMe");
  //var border = document.getElementById("border").value;
  var back = document.getElementById("background").value;
  alert(document.getElementById("background").value);
    alert("called it");
    document.getElementById("changeMe").style.backgroundColor=back;
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
