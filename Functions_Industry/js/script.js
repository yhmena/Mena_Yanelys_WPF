//Yanelys Mena
//Functions Industry
//October 24, 2013

//Can my department afford to splurge on a new conference room table?

var expenses = prompt("Enter your departments staple monthly expenses:"); //User inputs monthly expenses
var budget = prompt("What is your departments monthly budget?"); //user inputs monthly budget 
var priceofsplurge = prompt("Enter the cost of the item:"); //user inputs cost of item

var leftover = budget - expenses //This variable will calculate the leftover money that can be used after all expenses have been paid.

//if else statements

if (priceofsplurge >= leftover) { //if the price  of the splurge is equal to or more than the leftover money, they can't afford it
console.log("Sorry, you can't afford to purchase this item. After paying your monthly expenses of $" + expenses + ", you will only be left with " + leftover + ". ")
} else { //if the cost of the item is anything else, than they can use the money to purchase the item
console.log("You can afford to splurge on this because of your leftover monthly budget of " + leftover + "." );
}


