'use strict';
var originalHtml = document.body.innerHTML;//shows original html without function executions

//find three functions for 'roundBtn' buttons on meetThe intern page below
function hideQuote(){
     var q = document.getElementsByClassName("quote")[0];
    q.style.display = 'none';
    var q2 = document.getElementsByClassName("quote")[1];
    q2.style.display = 'none';
}

function showApplicationContent(){  
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
        var y = document.getElementById("subDiv1_application");
    y.style.display = 'block';
}

function showProjectPlanContent(){    
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
        var y = document.getElementById("subDiv3b_projectPlan");
    y.style.display = 'block';
}

function showNextTimeContent(){    
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
        var y = document.getElementById("subDiv4_nextTime");
    y.style.top = '7%';
    y.style.display = 'block';
}
