// Yanelys Mena
// 10-10-2013
// Expressions: Industry - 

//My main function at work is to support a Production Application. My boss has given me a project to work on. I must create a poster describing the 5 step Process that takes place. I need to fit all the information in a limited poster space. I also need to frame the poster, which decreases the poster space for me to design on. 

//Declaring Variables
var posterwidth = prompt("What is the width of your poster?");
var posterheight = prompt("What is the height of your poster?");
var frame = alert("Will you frame your poster?");
var framealert = alert("Framing your poster will reduce the amount of space to draw on. Press OK if you would like to continue.");
var framewidth = prompt("What is the width of the Inner part of the frame?");
var frameheight = prompt("What is the height of the innter part of the frame?");

//Calculatating Space to draw on:
var PosterArea = posterwidth * posterheight;
var FrameArea = framewidth * frameheight;
var PosterSpaceNotUsed = PosterArea - FrameArea; 
var PosterAreaLeft = PosterArea - PosterSpaceNotUsed;

console.log();






