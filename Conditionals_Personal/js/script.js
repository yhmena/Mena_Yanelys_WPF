//Yanelys Mena
//Conditionals 
//October 17, 2013

//Diet AID 
//Establishing Variables and assigning values
//Maximum amount of calories user is planning to consume
var string1 = prompt("Enter your daily maximum amount of calories:");
//Calories user has consumed at this point in the day
var string2 = prompt("Enter the amount of calories you have consumed thus far:");

//using parseInt to conver string into Integer
var maxCal = parseInt(string1);
//using parseInt to conver string into Integer
actualCal = parseInt(string2);

//calculations for Leftover Calories and Exceeded Calories (if applicable)
var leftoverCal = maxCal - actualCal
var exceededCal = actualCal - maxCal

if(maxCal > leftoverCal) {
	console.log("You have " + leftoverCal + " calories left to consume for the day.");
}else{
console.log("You have exceeded your calorie limit by " + exceededCal + " calories.");
}


