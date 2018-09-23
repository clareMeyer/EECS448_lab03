/*
slideShow.js
Author: Clare Meyer
Lab: 03; Exercise: 02
functions main.html
 */

var images = ["./puppy1.jpg","./puppy2.jpg","./puppy3.jpg","./puppy4.jpg", "./puppy5.jpg"];
var i=0;

//decrements counter keeping track of which picture to show, calls function that acutally changes picture. If statements loop so show never stops
//called when previous button is pressed
function previous(){
  if(i==0){
    i=(images.length)-1;
  }
  else{
    i--;
  }
  slideShow();
}

//increments counter keeping track of which picture to show, calls function that acutally changes picture. If statements loop so show never stops
//called when next button is pressed
function next(){
  if(i==(images.length)-1){
    i=0;
  }
  else{
    i++;
  }
  slideShow();
}

//slides to the next or previous picture
//called when previous button is pressed
function slideShow(){
  var edit=document.getElementById("slideShow");
  edit.src=images[i];
}
