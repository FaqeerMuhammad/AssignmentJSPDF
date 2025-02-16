// 1. Write a program that takes a positive integer from user & 
// display the following in your browser. 
// a. number 
// b. round off value of the number 
// c. floor value of the number 
// d. ceil value of the number 




// var num = +prompt( "Enter a positive Number")

// if (num>0) {


// document.write( "Number : "+  num +"<br>")
// document.write( "Round off value : "+  Math.round(num) +"<br>")
// document.write( "Floor  value : "+  Math.floor(num) +"<br>")
// document.write( "Ceil  value : "+  Math.ceil(num) +"<br>")


// }

// else {

// alert("Please enter a positive number")

// }



// 2. Write a program that takes a negative floating point number from user & 
// display the following in your browser. 
// a. number 
// b. round off value of the number 
// c. floor value of the number 
// d. ceil value of the number

// var num = +prompt( "Enter a Negative Number")

// if (num<0) {


// document.write( "Number : "+  num +"<br>")
// document.write( "Round off value : "+  Math.round(num) +"<br>")
// document.write( "Floor  value : "+  Math.floor(num) +"<br>")
// document.write( "Ceil  value : "+  Math.ceil(num) +"<br>")


// }

// else {

// alert("Please enter a Neagtive number")

// }


// 3. Write a program that displays the absolute value of 
// a number. e.g. absolute value of -4 is 4 & absolute value of 5 is 5


// var num1=-4
// var num2=5

// document.write( "The Absolute value of "+num1+ " is " + Math.abs(num1) +"<br>")
// document.write( "The Absolute value of "+num2+ " is " + Math.abs(num2) +"<br>")



// 4. Write a program that simulates a dice using random() method of JS Math class. 
// Display the value of dice in your browser.:




// document.write( "Random Dice value is "+ (Math.floor(Math.random() * 6) + 1) +"<br>");
// document.write( "Random Dice value is "+ (Math.floor(Math.random() * 6) + 1 )+"<br>") ;




// 5. Write a program that simulates a coin toss using random() method of JS Math class. 
// Display the value of coin in your browser

// num1=Math.floor(Math.random() * 2) + 1

// if (num1===2)
// {document.write( num1 + " Random Coin Value is  : Head" + "<br>");}

// else

// {document.write( num1 + " Random Coin Value is  : Tail" + "<br>");}



// 6. Write a program that shows a random number between 1 and 100 in your browser.



// document.write( "Random Number Between 1 to 100 is "+ (Math.floor(Math.random() * 100) + 1) +"<br>");



// 7. Write a program that asks the user about his weight. 
// Parse the user input and display his weight in your browser. Possible user inputs can be: 
// a. 50 
// b. 50kgs 
// c. 50.2kgs 
// d. 50.2kilograms


// var userWt = prompt( "Enter Your Wieght in Kilograms")
// var index = (userWt.toLocaleLowerCase()).indexOf('k');

// var userwt2 =+userWt


// if (isNaN(userwt2))

// {

//         if (index>0){

//            var userWTpart = userWt.slice(0, index);
//            var userWtfinal=+(userWTpart);

//            {document.write( " The wight of user  is " +  userWtfinal.toFixed(1) + " Kilograms <br>");}

//         }

//         else


//         {document.write( index + " Invalid input <br>");}
        
// }

// else

// {

//     var userWtfinal=+userWt
//     document.write( " The wight of user is " +  userWtfinal.toFixed(1) + " Kilograms <br>");

// }





// 8. Write a program that stores a random secret number from 1 to 10 in a variable. 
// Ask the user to input a number between 1 and 10. 
// If the user input equals the secret number, congratulate the user.




 

var secretNumber=(Math.floor(Math.random() * 10) + 1);


 var userNumber = +prompt("Ënter a Number between 1 to 10" ); 

 if(secretNumber===userNumber)
    {

        alert("Congratulation! ");
    }

 else if(( (secretNumber+1)===userNumber) || (secretNumber===++userNumber ))
    {

        alert("Close enough to the correct Number");
    }

    else { alert("Sorry Try Again");   }



