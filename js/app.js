console.log("Testing...")

//Home Page

const $me = 
$("#hi").fadeOut(2000,function() {
  $(this).text("Welcome to my Portfolio")
}).fadeIn();


$("#learn").fadeOut(4000,function() {
  $(this).text("Learn more about me,")
}).fadeIn();

$("#check").fadeOut(6000,function() {
  $(this).text("Check out my portfolio,")
}).fadeIn();

$("#and").fadeOut(8000,function() {
  $(this).text("And feel free to contact me!")
}).fadeIn();


// About Page

$("#aboutme").fadeOut(2000,function() {
  $(this).text("About Me")
}).fadeIn(); 


const $resume = $(
  '<a id= "resumeLink" href="https://docs.google.com/document/d/e/2PACX-1vQQas2_ryN3Ekcu-veoEqZW6naTS7VGKi1rGnDIYxbF7CMg2ENhDOstkbNVHYsbXVPW3imtyfOFc9KR/pub" style="color:black"><button style= "padding: 10px">Download Resume</button></a>'
  )
$("#section").append($resume)

// Portfolio Page

$("#port").fadeOut(2000,function() {
  $(this).text("My Portfolio")
}).fadeIn(); 


// Contact Page 

$("#contact").fadeOut(2000,function() {
  $(this).text("Contact Me")
}).fadeIn(); 


