// Yanelys Mena
// 10-09-2013
// Expressions: Industry - 

//Calculate the number of slices Sparky gets to eat.

//Declaring the Variables: # of slices per pizza, # of People, and # of Pizzas ordered
var numSlices = 8;
var numPeople = 25
var numPizzas = 10;

//Calculating how many exact slices of pizza each person will eat:
//Result is 3.2
var results = numSlices * numPizzas / numPeople

//Since each person can eat only whole pizzas, the remaining will be for Sparky
//Calculating Remainder of pizzas for Sparky
var remainder = numSlices * numPizzas % numPeople

 //Print out the results using console.log
console.log("Sparky got " + remainder + " slices of pizza.");