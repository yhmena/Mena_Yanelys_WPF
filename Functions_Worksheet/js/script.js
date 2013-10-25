//Yanelys Mena
//Functions Worksheet
//October 24, 2013


//Calculate the circumference of a circle
//FORMULA >> C = 2 * Pie * radius

var total = Calc(5); //Establishing variable so for Return

function Calc(radius){ //parameter is established
	var circumference = 2 * 3.14 * radius; //This is the formula that will be used to calculate the circumference
	return circumference; // Return so that function can be printed in the console
}
console.log("The circumference of the circle is " + total + ".");
//Printing out to the console


//STUNG! 
//It takes 8.666666667 bee stings per pound to kill an animal. Calculate how many bee stings are needed to kill an animal in a function



var total = Stings(10); //establishing weight as argument and variable for later return

function Stings(weight){ 

var stingstotal =8.666666667 * weight; 
return stingstotal;
}
