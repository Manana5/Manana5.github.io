'use strict';
var originalHtml = document.body.innerHTML;//shows original html without function executions

//find three functions for 'roundBtn' buttons on meetThe intern page below
function hideQuote(){
     var q = document.getElementsByClassName("quote")[0];
    q.style.display = 'none';
    var q2 = document.getElementsByClassName("quote")[1];
    q2.style.display = 'none';
}

function showPersonalContent(){  
    var n = document.getElementsByClassName("roundBtn");
    for ( var i = 0; i < n.length; i++) {
            n[i].style.top = '72%';
         n[i].style.backgroundColor = 'rgba(194, 145, 19, 0.76)';
  }
    n[0].style.marginLeft = '27%';
    n[1].style.marginLeft = '12%';
    n[2].style.marginLeft = '41%';
    
    var x = document.getElementsByClassName("subDiv"); 
        for ( var i = 0; i < x.length; i++){
            x[i].style.display = 'none';        
 }
        var y = document.getElementById("subDiv1");
    y.style.display = 'block';
}

function showJobContent(){    
    
    var n = document.getElementsByClassName("roundBtn");
    for ( var i = 0; i < n.length; i++) {
            n[i].style.top = '72%';
         n[i].style.backgroundColor = 'rgba(194, 145, 19, 0.76)';
  }
    n[0].style.marginLeft = '27%';
    n[1].style.marginLeft = '12%';
    n[2].style.marginLeft = '41%';
    
    var x = document.getElementsByClassName("subDiv"); 
        for ( var i = 0; i < x.length; i++){
            x[i].style.display = 'none';        
 }
        var y = document.getElementById("subDiv3b");
    y.style.display = 'block';
}

function showFutureContent(){    
    var n = document.getElementsByClassName("roundBtn");
    for ( var i = 0; i < n.length; i++) {
            n[i].style.top = '72%';
         n[i].style.backgroundColor = 'rgba(194, 145, 19, 0.76)';
  }
    n[0].style.marginLeft = '27%';
    n[1].style.marginLeft = '12%';
    n[2].style.marginLeft = '41%';
    
    var x = document.getElementsByClassName("subDiv"); 
        for ( var i = 0; i < x.length; i++){
            x[i].style.display = 'none';        
 }
        var y = document.getElementById("subDiv4");
    y.style.top = '7%';
    y.style.display = 'block';
}

//find all next and previous buttons functions below
function nextDiv(){    
   var x = document.getElementsByClassName("subDiv"); 
        for ( var i = 0; i < x.length; i++) {
            x[i].style.display = 'none';
}

    var y = document.getElementById("subDiv2");
    y.style.display = 'block';
}

function previousDiv(){    
   var x = document.getElementsByClassName("subDiv"); 
        for ( var i = 0; i < x.length; i++) {
            x[i].style.display = 'none';
}

    var y = document.getElementById("subDiv1");
    y.style.display = 'block';
}

function nextDiv3(){    
   var x = document.getElementsByClassName("subDiv"); 
        for ( var i = 0; i < x.length; i++) {
            x[i].style.display = 'none';
}

    var y = document.getElementById("subDiv3c");
    y.style.display = 'block';
}

function previousDiv3(){    
   var x = document.getElementsByClassName("subDiv"); 
        for ( var i = 0; i < x.length; i++) {
            x[i].style.display = 'none';
}

    var y = document.getElementById("subDiv3b");
    y.style.display = 'block';
}
//function transTime(){
//     document.getElementById("subDiv1").style.transitionDuration = "3.5s";    
//}

//$(document).ready(function(){
//$(".quote").load(function(){
//    $(".quote").css("display", "none");
//});
//});