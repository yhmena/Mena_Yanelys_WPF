// Yanelys Mena
// 10-09-2013
// Expressions Worksheet

//Calculate Discount with and without tax

//Declaring variables
var originalPrice = 15;
var discountPercentage = 10;
var itemDes = "purse";
var taxPercentage = 5;

//Calculating the amount of tax on the item and the amount discounted
var taxTotal = originalPrice * taxPercentage / 100
var discountTotal = originalPrice * discountPercentage / 100;

//Finalizing total amount with and without tax
var TotalwithTax = originalPrice - discountTotal + taxTotal;
var TotalwithoutTax = originalPrice - discountTotal

console.log("Your " + itemDes + " was originally $" + originalPrice + ", but after a " + discountPercentage + "% discount, it is now $" + TotalwithoutTax + "0 without tax, and $" + TotalwithTax + " with tax.");


 