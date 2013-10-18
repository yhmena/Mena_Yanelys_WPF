//Yanelys Mena
//Conditionals Worksheet
//October 17, 2013

//Converting a temperature to either Celsius or Fahrenheit

//What is the unit you want to convert to? ex: F
var unit = prompt("Which unit are you converting to? Enter 'F' for Fahrenheit or 'C' for Celsius.");
//What is the degree amount you are converting? ex: 100
var degree = prompt("Enter degree amount:");

//Formula for converting Celsius to Fahrenheit
var degF = degree * 1.8 + 32

//Formula for converting Fahrenheit to Celsius
var degC =  (degree - 32)/ 1.8;

//If User chooses C unit, it will print out degF conversion
if(unit = "C"){
	console.log("This is " + degF + " in degrees Fahrenheit.");
	alert("This is " + degF + " in degrees Fahrenheit.");
	//otherwise it will print out the degC conversion 
	}else{
		console.log("This is " + degC + " in degrees Celsius.");
		alert("This is " + degC + " in degrees Celsius.");
	}
	
	
