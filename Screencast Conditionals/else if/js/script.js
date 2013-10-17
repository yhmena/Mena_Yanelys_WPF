//Conditional Logic - else if

var kidHeight = 47;
var minHeight = 48;
var wparentHeight = 45;

//if the child is old enough, print out to console
//if the kid is over 48 inches in height
if(kidHeight > minHeight){
	//code performed if condition is true
	console.log("You can ride the coaster!");
}

else if(kidHeight >= wparentHeight){
	//you can ride with a parent present
	console.log("You can ride only with a parent present.");
}else{
	//sorry you have growing to do
	console.log("Sorry Kid.");
}