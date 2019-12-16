'use strict';

$(document).ready(function(){
    console.log('..LeBron on the fastbreak..')

let audio = $("#c4u")[0];
$("#cavs").mouseenter(function() {
  audio.play();
  console.log("audio works for 2nd cavs");
});

let noAudio = $("#c4u")[0];
$("#cavs").mouseleave(function() {
  audio.pause();
  audio.currentTime = 0;
  console.log("cavs working");
})
  console.log("audio works for 2nd cavs");


//////////////////////////////////

let riley = $("#heat")[0];
$("#miami").mouseenter(function() {
  riley.play();
  console.log("miami working");
})

let noRiley = $("#heat")[0];
$("#miami").mouseleave(function() {
  riley.pause();
  riley.currentTime = 0;
  console.log("miami working");
}) 


////////////////////////////////////

let akron = $("#akron")[0];
$("#cleveland").mouseenter(function() {
  akron.play();
  console.log("cavs working");
})

let akGone = $("#akron")[0];
$("#cleveland").mouseleave(function() {
  akron.pause();
  akron.currentTime = 0;
  console.log("cavs working");
})

//////////////////////////////

let losAng = $("#laker")[0];
$("#lakers").mouseenter(function() {
  losAng.play();
  console.log("lakers working");
})

let losGone = $("#laker")[0];
$("#lakers").mouseleave(function() {
  losAng.pause();
  losAng.currentTime = 0;
  console.log("lakers working");
})

});