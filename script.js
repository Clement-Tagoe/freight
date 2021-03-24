var firstNum = document.querySelector("span.count");
var secNum = document.querySelector("span.count2");
var thirdNum = document.querySelector("span.count3");
var fourthNum = document.querySelector("span.count4");
var myNav = document.getElementById('mynav');

window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 ) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }

    if (document.body.classList.contains("body")) {
    
        if (document.body.scrollTop >= 1200 || document.documentElement.scrollTop >= 1200) {
            firstNum.classList.add("count1");
            secNum.classList.add("count1");
            thirdNum.classList.add("count33");
            fourthNum.classList.add("count44");
        } 
        else {
            firstNum.classList.remove("count1");
            secNum.classList.remove("count1");
            thirdNum.classList.remove("count33");
            fourthNum.classList.remove("count44");
        }
    
    }
};
