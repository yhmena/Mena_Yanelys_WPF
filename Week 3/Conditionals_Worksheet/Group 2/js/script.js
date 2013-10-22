//Yanelys Mena
//Conditionals Worksheet
//October 17, 2013

//Grade Letter Calculator

alert("Welcome to Full Sail University's Grade Letter Calculator!");

//What is your grade (ex: 100)?
var grade = prompt("Enter numerical grade:");

//Letter Variable for Console Print
var letter

//Conditional Expressions

           if(grade <= 100 && grade >= 95){
            
			 letter = 'A+';
             console.log("Your Grade is: " + letter);
			 alert(	"Your Grade is: " + letter);
			}
			
//Using else if

		    else if (grade <= 94 && grade >= 90){
                letter = 'A';
                console.log("Your Grade is: " + letter);
				alert(	"Your Grade is: " + letter);
			}
				 
				 else if (grade <= 89 && grade >= 85){
                letter = 'B+';
                console.log("Your Grade is: " + letter);
				alert(	"Your Grade is: " + letter);
			}
			
				
           else if (grade <= 84 && grade >= 80){
                letter = 'B';
                console.log("Your Grade is: " + letter);
				alert(	"Your Grade is: " + letter);
			}
			
			
          else if(grade <= 79 && grade >= 76){
                letter = 'C+';
                console.log("Your Grade is: " + letter);
				alert(	"Your Grade is: " + letter);
			}
			
            
          else  if(grade <= 75 && grade >= 73){
                letter = 'C';
                console.log("Your Grade is: " + letter);
				alert(	"Your Grade is: " + letter);
			}
			
				
				else if (grade <= 72 && grade >= 70){
                letter = 'D';
                console.log("Your Grade is: " + letter);
				alert(	"Your Grade is: " + letter);
			}
			
			
			else if (grade <= 69 && grade >= 0){
                letter = 'F';
                console.log("Your Grade is: " + letter);
				alert(	"Your Grade is: " + letter);
			}
           