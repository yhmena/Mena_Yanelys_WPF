//Yanelys Mena
//October 17, 2013
//Conditionals: Industry

// Schedule Aid: How many hours a week do you have left over to do howework?
//This is based on Full Sails curriculum of hours
//Example: Use WPF Week 4 total estimated HW time of 2 hours
//Lets calculate if you have enough time leftover to do hw

alert("Welcome to Homework Aid! We can help you figure out how many hours you have left throughout the week to actually do your assignments!");

var string1 = prompt("Enter the number of Assignment Hours for one Full Sail Course Week:");
FSUHoursWeekly = parseInt(string1);
var string2 = prompt("How many hours do you work daily?");
workHours = parseInt(string2);
var string3 = prompt("How many hours does it take to commute to and from work daily?");
commute = parseInt(string3);
var string4 = prompt("How many hours do you need to sleep?");
var sleep = parseInt(string4);

//here I am calculating the total hours spent working, commuting, and sleeping per week
var HoursBusyWeek = 7 * (workHours + commute + sleep)

var HoursLeftWeek = (24 * 7 - HoursBusyWeek);

(HoursLeftWeek > FSUHoursWeekly) ? console.log("You have " + HoursLeftWeek + " hours per week for Full Sail Assignments.") : console.log("You don't have any time left during your week for your homework. Make Time!");

//Calculate Total Hours taken up by work, commute and sleep

//Numbers used for conditional expressions are: 24 hours per day and 7 days a week

//Does your spare time exceed the left over than your assigned HW time?
//(FSUHours > totalHours) ? console.log("You do not have time for homework") : console.log("You do have time for homework");

