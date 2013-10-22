//Yanelys Mena
//Conditionals Worksheet
//October 17, 2013

//Movie Ticket Price
//Variable and Valuable for Time input by User
var Time = prompt("Enter the time of your movie.");

//CONDITIONAL EXPRESSION USING THE LONG WAY IF AND ELSE
if(Time >= 3 && Time <= 5) {
	console.log("Your ticket price is $7!") + alert("Your ticket price is $7!");
}else{
	console.log("Your ticket price is $12.") + alert("Your ticket price is $12.");
}

//Variable and Value for Age input by User
var Age = prompt("Enter your age:");

//Conditional Expression  USING THE SHORTCUT WITH ? AND :
(Age <= 10 && Age >= 55) ? 
	console.log("Congratulations! Your discount ticket price is 7 dollars.") + alert("Congratulations! Your discount ticket price is 7 dollars.") :

	console.log("Your ticket price is $12.") + alert("Your ticket price is $12.");
