//Yanelys Mena
//Functions Personal
//October 24, 2013


//Determine Calories burned while jogging
//Formula: .75 * Weight in Pounds * # of miles ran

alert("Let's calculate the number of calories you'll burn while running!"); //Informing the user what is being calculated
var expected = prompt("How many calories are you expecting to burn?") //Grabing information input by user

var miles = prompt("Enter the total number of miles you will run:"); //grabing information input by user

var weight = prompt("Enter your current weight in pounds:"); //grabing information input by user

var calccalories = .75 * miles * weight //calculating calories burned

var caloriesBurned //declaring the variable that I will use in my ternary conditional statement below

