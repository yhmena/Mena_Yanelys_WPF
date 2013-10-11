// Yanelys Mena
// 10-09-2013
// Expressions Wacky


alert("Hello There!");

var MonthlyIncome = prompt("What is your monthly income?");
var Rent = prompt("How much do you pay in rent?");
var Expenses = prompt("What is the estimated total cost of other expenses per month?");

//Calculating remaining funds
var Total = Rent + Expenses;
var Leftover = MonthlyIncome - Total;
