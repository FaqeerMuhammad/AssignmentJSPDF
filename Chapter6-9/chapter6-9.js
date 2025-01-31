// 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:

// var a=10;

// document.write( "Result: <br><br>") ;

// document.write( "The value of a is : " + a + "<br>");
// document.write( "---------------------------------" + "<br><br>");



// document.write( "The value of ++a is : " + ++a + "<br>");
// document.write( "Now the value of a is : " + a + "<br><br>");

// document.write( "The value of a++ is : " + a++ + "<br>");
// document.write( "Now the value of a is : " + a + "<br><br>");


// document.write( "The value of --a is : " + --a + "<br>");
// document.write( "Now the value of a is : " + a + "<br><br>");

// document.write( "The value of a-- is : " + a-- + "<br>");
// document.write( "Now the value of a is : " + a + "<br><br>");

// 2. What will be the output in variables a, b & result after execution of the following script: 
// var a = 2, b = 1; var result = --a - --b + ++b + b--;


// 4.
// 5. Write a program to take input a number from user & display it’s multiplication table on your browser. 
// If user does not enter a new number, multiplication table of 5 should be displayed by default.

    

    // 6. Take
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table




// var subject1 = prompt("Ënter Your Subject 1") ;

// var subject2 = prompt("Ënter Your Subject 2") ;

// var subject3 = prompt("Ënter Your Subject 3") ;

// var totalMarksSub = 100;  
// var totalMarks=300;
// var totalObtain=0 ;


// var obMarksSub1 = +prompt("Ënter Your Obtain Marks in " + subject1 ) ;

// var obMarksSub2 = +prompt("Ënter Your Obtain Marks in " + subject2 );

// var obMarksSub3 = +prompt("Ënter Your Obtain Marks in " + subject3 ); 

// totalObtain=obMarksSub1+obMarksSub2+obMarksSub3;

// document.write ("<style> table, th, td { border: 1px solid black } </style>")

// document.write( " <table> <tr> <th>Subject</th> <th>Total Marks</th> <th>Obtained Marks</th> <th>Percentage</th>  </tr> ") ;
// document.write( "  <tr> <td> " +subject1+"</td> <td>" +totalMarksSub+"</td> <td>" +obMarksSub1+"</td> <td>" +(((obMarksSub1/totalMarksSub) *100).toFixed())+"%</td>  </tr> ") ;
// document.write( "  <tr> <td> " +subject2+"</td> <td>" +totalMarksSub+"</td> <td>" +obMarksSub2+"</td> <td>" +(((obMarksSub2/totalMarksSub) *100).toFixed())+"%</td>  </tr> ") ;
// document.write( "  <tr> <td> " +subject3+"</td> <td>" +totalMarksSub+"</td> <td>" +obMarksSub3+"</td> <td>" +(((obMarksSub3/totalMarksSub) *100).toFixed())+"%</td>  </tr> ") ;
// document.write( "  <tr> <th> " +"Total"+"</th> <th>" +totalMarks+"</th> <th>" +totalObtain+"</th> <th>" +((( totalObtain/totalMarks) *100).toFixed())+"%</th>  </tr> </table>") ;



// 7. Guess game:Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number. 
// a. If user guesses the same number, show “Bingo! Correct answer”. 
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.


// var secretNumber=6;

//  var userNumber = +prompt("Ënter Your Gues Number " ); 

//  if(secretNumber===userNumber)
//     {

//         alert("Bingo! Correct answer");
//     }

//  else if(( (secretNumber+1)===userNumber) || (secretNumber===++userNumber ))
//     {

//         alert("Close enough to the correct answer");
//     }

//     else { alert("Sorry");   }



// 8. Write a program to check whether the given number is divisible by 3. 
// Show the message to the user if the number is divisible by 3.


// var numberUser = +prompt("Ënter Your Number " ); 

// if (numberUser % 3 === 0) {
    
//     alert (numberUser + " is divisible by 3");
// } else {
//     alert(numberUser + " is not divisible by 3");
// }


// 9. Write a program that checks whether the given input is an even number or an odd number.


// var numberUser = +prompt("Ënter Your Number " ); 

// if (numberUser % 2 === 0) {
    
//     alert (numberUser + " is Even Number");
// } else {
//     alert(numberUser + " is Odd Number");
// }


// 10. Write a program that takes temperature as input and shows a message based on following criteria
//  a. T > 40 then “It is too hot outside.” 
// b. T > 30 then “The Weather today is Normal.” 
// c. T > 20 then “Today’s Weather is cool.” 
// d. T > 10 then “OMG! Today’s weather is so Cool.”


// var userTemp = +prompt("Ënter Temperature " ); 

// if (userTemp>40){ alert ("It is too hot outside.");}
// else if (userTemp>30){ alert ("The Weather today is Normal.");}
// else if (userTemp>20){ alert ("Today’s Weather is cool.");}
// else if (userTemp>0){ alert ("OMG! Today’s weather is so Cool.");}
// else if (userTemp<0){ alert ("OMG! Icing berg.");}


// 11. Write a program to create a calculator for +,-,*, / & % using if statements. 
// Take the following input: 
// a. First number b. Second number c. Operation (+, -, *, /, %) 
// Compute & show the calculated result to user.


 var firstNumber = +prompt("Ënter First Number " ); 
 var secondNumber = +prompt("Ënter Second Number " ); 
 var operationsymb = prompt("Ënter Operation Syble + , - , * , / ,% " ); 
 
 if (operationsymb==="+" ){ alert( "Your Anwer is " +( firstNumber+secondNumber)) }

else if (operationsymb==="-" ){ alert( "Your Anwer is " +( firstNumber-secondNumber)) }

else if (operationsymb==="*" ){ alert( "Your Anwer is " +( firstNumber*secondNumber)) }

else if (operationsymb==="/" ){ alert( "Your Anwer is " +( firstNumber/secondNumber)) }


else if (operationsymb==="%" ){ alert( "Your Anwer is " +( firstNumber%secondNumber)) }

else {alert( "Ivalid Symble/Number")}