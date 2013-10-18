//Yanelys Mena
//Conditionals 
//October 17, 2013

//Diet AID 
//Establishing Variables and assigning values
//Maximum amount of calories user is planning to consume
var maxCal = prompt("Enter your daily maximum amount of calories:");
//Calories user has consumed at this point in the day
var actualCal = prompt("Enter the amount of calories you have consumed thus far:");
//Calories left to consume
var leftoverCal = maxCal - actualCal
var exceededCal = leftoverCal - maxCal

(leftoverCal <= maxCal) ? 
console.log("You have " + leftoverCal + " calories left to consume today.") + alert("You have " + leftoverCal + "calories left to consume today.") : 
console.log("You have exceeded your maximum amount of calories by" + exceededCal + ".") + alert("You have exceeded your maximum amount of calories by" + exceededCal + ".");

