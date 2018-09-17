var images = ["./puppy1.jpg","./puppy2.jpg","./puppy3.jpg","./puppy4.jpg", "./puppy5.jpg"];
var i=0;

function previous(){
  if(i==0){
    i=images.length;
  }
  else{
    i--;
  }
  slideShow();
}
function next(){
  if(i==images.length){
    i=0;
  }
  else{
    i++;
  }
  slideShow();
}
function slideShow(){
  document.write(images[i]);
  return images[i];
}
