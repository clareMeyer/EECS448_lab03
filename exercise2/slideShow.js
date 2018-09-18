var images = ["./puppy1.jpg","./puppy2.jpg","./puppy3.jpg","./puppy4.jpg", "./puppy5.jpg"];
var i=0;

function previous(){
  if(i==0){
    i=(images.length)-1;
  }
  else{
    i--;
  }
  slideShow();
}
function next(){
  if(i==(images.length)-1){
    i=0;
  }
  else{
    i++;
  }
  slideShow();
}
function slideShow(){
  var edit=document.getElementById("slideShow");
  edit.src=images[i];
}
