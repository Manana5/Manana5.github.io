'use strict';
var originalHtml = document.body.innerHTML;

var slideIndex = 1;
showDivs(slideIndex);

function nextDiv(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slideImg");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

var index = 0;
carousel(); 
//like a roundabout, rotates the images in a cycle
function carousel(){
    var i;
    var x = document.getElementsByClassName("slideImg");
    for(i = 0; i< x.length; i++){
        x[i].style.display = "none";
    }
    index++;
    if(index > x.length){
        index = 1
    }
    x[index-1].style.display = "block";
    setTimeout(carousel,3500);
} 

