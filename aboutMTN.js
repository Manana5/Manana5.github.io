'use strict';
var originalHtml = document.body.innerHTML;//shows original html without function executions

// next and previous buttons functions
function nextDiv(){    
   var x = document.getElementsByClassName("subDivMTN"); 
        for ( var i = 0; i < x.length; i++) {
            x[i].style.display = 'none';
}

    var y = document.getElementById("subDiv6");
    y.style.display = 'block';
}

function previousDiv(){    
   var x = document.getElementsByClassName("subDivMTN"); 
        for ( var i = 0; i < x.length; i++) {
            x[i].style.display = 'none';
}

    var y = document.getElementById("subDiv5");
    y.style.display = 'block';
}

function nextDivSiz(){
     var x = document.getElementsByClassName("subDivMTN"); 
        for ( var i = 0; i < x.length; i++) {
            x[i].style.display = 'none';
}
     var y = document.getElementById("subDiv8a");
    y.style.display = 'block';
}

function nextDivSiz1(){
     var x = document.getElementsByClassName("subDivMTN"); 
        for ( var i = 0; i < x.length; i++) {
            x[i].style.display = 'none';
}
     var y = document.getElementById("subDiv8b");
    y.style.display = 'block';
}

function nextDivSiz2(){
     var x = document.getElementsByClassName("subDivMTN"); 
        for ( var i = 0; i < x.length; i++) {
            x[i].style.display = 'none';
}
     var y = document.getElementById("subDiv8");
    y.style.display = 'block';
}

function nextDivProd(){
    hideAll();    
        var y = document.getElementById("subDiv10b");
            y.style.display = 'block';
}

function previousDivProd(){
    hideAll();
    var t = document.getElementById("subDiv10");
    t.style.display = 'block';
}

function nextDivTwit(){
    hideAll();
    var t = document.getElementById("subDivInsta");
    t.style.display = 'block';
} 

function nextDivInsta(){
    hideAll();
    var t = document.getElementById("facebookFeed");
    t.style.display = 'block';
}

function nextDivFace(){
    hideAll();
    var t = document.getElementById("subDiv11");
    t.style.display = 'block';
}
//moves circles to far let at click of circle
 function shift(){
    var t = document.getElementsByClassName("contentDiv short");
    var x = document.getElementsByClassName("aboutMTNImg");
    var e = document.getElementById("contentDiv2");
    var h = document.getElementById("aboutMTNHeader");
     h.style.marginLeft = '31%';
    e.style.display = 'none'; 
         for(var s = 0; s < t.length; s++){
             t[s].style.display = 'none';
         }
         for(var i = 0; i < x.length; i=i+2){
         x[i].style.marginLeft = '10%';
       }
         for(var y = 1; y < x.length; y=y+2){
         x[y].style.marginLeft = '23.5%';
       }
     
     x[1].style.top = '19%';
     x[3].style.top = '45%';
     x[5].style.top = '71%';
     x[0].style.top = '9%';
     x[2].style.top = '35%';
     x[4].style.top = '61%';  
 }
       
  function hideAll(){
    var b = document.getElementsByClassName('subDivMTN');
    for (var i = 0; i < b.length;i++){
        b[i].style.display = 'none';
    }
  }

  function showHistory(){
        hideAll();
           var a = document.getElementById('subDiv5');
           a.style.display = 'block';
  }

function showLocation(){
        hideAll();
           var a = document.getElementById('subDiv7');
           a.style.display = 'block';
  }

function showSize(){
        hideAll();
           var a = document.getElementById('subDiv8');
           a.style.display = 'block';
  }

function showProjects(){
        hideAll();
           var a = document.getElementById('subDiv9');
           a.style.display = 'block';
  }

function showProducts(){
        hideAll();
           var a = document.getElementById('subDiv10');
           a.style.display = 'block';
  }

function showContacts(){
        hideAll();
           var a = document.getElementById('subDiv11');
           a.style.display = 'block';
  }

var index = 0;
//like a roundabout, rotates the images in a cycle
function carousel(){
    var i;
    var x = document.getElementsByClassName("projIMG");
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
/* map marker showing url*/
function initMap() {
 var myCenter = new google.maps.LatLng(-26.412462, 31.177307);
 var mapCanvas = document.getElementById("map");
 var mapOptions = {center: myCenter, zoom: 13};
 var map = new google.maps.Map(mapCanvas, mapOptions);
 var marker = new google.maps.Marker({position:myCenter});
 marker.setMap(map);
 google.maps.event.addListener(marker,'click',function() {
   var infowindow = new google.maps.InfoWindow({
     content:'<a href="https://www.facebook.com/MTNSz/">Swazi MTN URL</a>'
   });
 infowindow.open(map,marker);
 });
}

