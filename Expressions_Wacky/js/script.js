// Yanelys Mena
// 10-09-2013
// Expressions Wacky: Finance Report


alert("Hello There! Let's calculate your Monthly and Yearly Finances report!"); //Welcoming the user to the page and preparing them for the monthly expenses calculation

var MonthlyIncome = prompt("What is your monthly income?"); //Storing monthly income
var rent = prompt("How much do you pay in rent?"); //Storing Rent Total
var bills = prompt("What is the estimated total cost of other expenses per month?"); //Storing other monthly Expenses

//Calculating remaining funds

var yearlyincome = MonthlyIncome * 12;
var MonthlyBills = rent + bills; //Here I am calculating the total expenses and rent monthly
var YearlyBills = MonthlyBills * 12; //This is the total expenses and rent for the year


//Alerting the user of their results
alert("You earn approximately $" + yearlyincome + " per year. Combined with rent, your bills sum up to a total of $" + YearlyBills + " per year. This means that your monthly income comes to a total of $" + MonthlyIncome + " and your bills are approximately $" + MonthlyBills + ".");


//Printing it out in the Console
console.log("You earn approximately $" + yearlyincome + " per year. Combined with rent, your bills sum up to a total of $" + YearlyBills + " per year. This means that your monthly income comes to a total of $" + MonthlyIncome + " and your bills are approximately $" + MonthlyBills + ".");

