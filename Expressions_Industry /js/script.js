// Yanelys Mena
// 10-10-2013
// Expressions: Industry - Designing a Poster for Work

//My main function at work is to support a Production Application. My boss has given me a project to work on. I must create a poster describing the 5 step Process that takes place. I need to fit all the information in a limited poster space. I also need to frame the poster, which decreases the poster space for me to design on. 

//Declaring and Assigning Variables
var posterwidth = prompt("What is the width of your poster?"); //Declaring and Assigning the width of the Poster
var posterheight = prompt("What is the height of your poster?"); //Declaring and Assigning the height of the poster
var framewidth = prompt("What is the width of the inner part of the frame?"); //Declaring and Assigning the inner part of the frame
var frameheight = prompt("What is the height of the inner part of the frame?"); //Declaring and Assigning the inner part of the frames height


//Calculatating Space to draw on:
var PosterArea = posterwidth * posterheight; //Here I am calculating the Poster Area by multiplying WxH of Poster
var FrameArea = framewidth * frameheight;
var PosterSpaceNotUsed = PosterArea - FrameArea; 
var PosterAreaLeft = PosterArea - PosterSpaceNotUsed;

//This is so that the user can see their results.
alert("Originally, you had " + PosterArea + " inches of poster space.  If you add a frame you will have " + FrameArea + " inches of poster space to design on. By adding the frame you lost a total of " + PosterSpaceNotUsed + " inches of poster space.");

console.log("Originally, you had " + PosterArea + " inches of poster space.  If you add a frame you will have " + FrameArea + " inches of poster space to design on. By adding the frame you lost a total of " + PosterSpaceNotUsed + " inches of poster space.");






