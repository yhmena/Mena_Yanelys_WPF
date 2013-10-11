// Yanelys Mena
// 10-10-2013
// Expressions: Industry - Designing a Poster for Work

//My main function at work is to support a Production Application. My boss has given me a project to work on. I must create a poster describing the 5 step Process that takes place. I need to fit all the information in a limited poster space. I also need to frame the poster, which decreases the poster space for me to design on. 

//Declaring and Assigning Variables
var posterwidth = prompt("What is the width in inches of your poster?"); //Declaring and Assigning the width of the Poster
var posterheight = prompt("What is the height in inches of your poster?"); //Declaring and Assigning the height of the poster
var framewidth = prompt("What is the width in inches of the inner part of the frame?"); //Declaring and Assigning the inner part of the frame
var frameheight = prompt("What is the height in inches of the inner part of the frame?"); //Declaring and Assigning the inner part of the frames height


//Calculatating Space to draw on:
var PosterArea = posterwidth * posterheight; //Here I am calculating the Poster Area by multiplying WxH of Poster
var FrameArea = framewidth * frameheight; //Here I am calculating the area of the poster that will be actually seen after putting it in a frame. I do this by just multiplying HxW of inner frame.
var PosterSpaceNotUsed = PosterArea - FrameArea; //This is the area of the poster that will be covered up by the frame
var PosterAreaLeft = PosterArea - PosterSpaceNotUsed; // This is to check that FrameArea is accurate by subtracting the PosterSpaceNotUsed from the original PosterArea

//This is so that the user can see their results.
alert("Originally, you had " + PosterArea + " inches of poster space.  If you add a frame you will have " + FrameArea + " inches of poster space to design on. By adding the frame you lost a total of " + PosterSpaceNotUsed + " inches of poster space.");

//Printing the results in the console for developer to view
console.log("Originally, you had " + PosterArea + " inches of poster space.  If you add a frame you will have " + FrameArea + " inches of poster space to design on. By adding the frame you lost a total of " + PosterSpaceNotUsed + " inches of poster space.");






