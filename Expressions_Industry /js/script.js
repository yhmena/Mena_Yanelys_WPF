// Yanelys Mena
// 10-10-2013
// Expressions: Industry - 

//Calculate how many assignments to balance

//Balancing Average In my current job there are 
var posterwidth = prompt("What is the width of your poster?");
var posterheight = prompt("What is the height of your poster?");
var frame = prompt("Will you frame your poster?");
var framealert = alert("Framing your poster will reduce the amount of space to draw on. Press OK if you would like to continue.");
var framewidth = prompt("What is the width of the Inner part of the frame?");
var frameheight = prompt("What is the height of the innter part of the frame?");

//Calculatating Space to draw on:
var PosterArea = posterwidth * posterheight;
var FrameArea = framewidth * frameheight;
var PosterSpaceNotUsed = PosterArea - FrameArea; 
var PosterAreaLeft = PosterArea - PosterSpaceNotUsed;






