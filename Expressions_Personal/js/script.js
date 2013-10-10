// Yanelys Mena
// 10-10-2013
// Assignment: Expressions - Personal: Book Reading Plan


// My Book reading Plan: The purpose of this code is to calculate how many pages I must read to complete my entire book in a specific amount of days and/or months.

var message = "Press 'OK' to create your daily and monthly Book Reading Plan.";
alert(message);


//How many pages does your book contain?
var pages = prompt("How many pages does your book contain?");

//How many days do you have to complete this book?
var days = prompt("How many days do you have to completely read this book?");

//How many months do you have to complete this book?
var months = prompt("How many months do you have to completely read this book?");

//Calculating how many pages I should read either Daily or Monthly in order to successfully read the entire book in a specific amount of time
var resultsdays = pages / days;
var resultsmonths = pages / months;




 //Print out the results using console.log
console.log("To read your entire book of " + pages + " page(s) in " + days + " days," + " you must read " + resultsdays + " page(s) per day. \n"  +
"To read your entire book in " + months + " months, you must read "  + resultsmonths + " page(s) per month.");