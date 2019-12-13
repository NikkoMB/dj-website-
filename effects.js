'use strict';

$(document).ready(function(){
    console.log('..LeBron on the fastbreak..')

let audio = $("#c4u")[0];
$("#cavs").mouseenter(function() {
  audio.play();
  console.log("audio works for 2nd cavs");
});


let riley = $("#heat")[0];
$("#miami").mouseenter(function() {
  riley.play();
  console.log("miami working");
})






});

