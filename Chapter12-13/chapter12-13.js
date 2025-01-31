
// 1.Write a program that takes a character (number or string) in a variable & 
// checks whether the given input is a number, uppercase varter or lower case varter. 
// (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).



// var character = prompt("Enter a single character:");


// if (character.length !== 1) {
//   console.log("Enter exactly one character.");
// } else {

//   var asciiCode = character.charCodeAt(0);


//   if (asciiCode >= 48 && asciiCode <= 57) { 
//     console.log(`The character '${character}' is a number.`);
//   }

//   else if (asciiCode >= 65 && asciiCode <= 90) { 
//     console.log(`The character '${character}' is an uppercase varter.`);
//   }

//   else if (asciiCode >= 97 && asciiCode <= 122) { 
//     console.log(`The character '${character}' is a lowercase varter.`);
//   } else {
//     console.log(`The character '${character}' is neither a number nor a varter.`);
//   }
// }


// 2. Write a JavaScript program that accept two integers and display the larger. 
// Also show if the two integers are equal.



// var num1 = +prompt("Enter the first integer:");


// var num2 = +prompt("Enter the second integer:");


// if (isNaN(num1) || isNaN(num2)) {
//   console.log("Please enter valid integers.");
// } else {

//   if (num1 > num2) {
//     console.log(`The larger number is: ${num1}`);
//   } else if (num2 > num1) {
//     console.log(`The larger number is: ${num2}`);
//   } else {
//     console.log("Both numbers are equal.");
//   }
// }


// 3. Write a program that takes input a number from user & 
// state whether the number is positive, negative or zero.



// var number = parseFloat(prompt("Enter a number:"));


// if (isNaN(number)) {
//   console.log("Please enter a valid number.");
// } else {
  
//   if (number > 0) {
//     console.log("The number is positive.");
//   } else if (number < 0) {
//     console.log("The number is negative.");
//   } else {
//     console.log("The number is zero.");
//   }
// }


// 4. Write a program that takes a character (i.e. string of length 1) 
// and returns true if it is a vowel, false otherwise



// var character = prompt("Enter a single character:");


// if (character.length !== 1) {
//   console.log("Enter one character.");
// } else {

//   character = character.toLowerCase();


//   if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
//     console.log(true); 
//   } else {
//     console.log(false); 
//   }
// }


// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give message “ Please enter your password”
// ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise


// var correctPassword = "Password@321";


// var userPassword = prompt("Enter your password:");


// if (!userPassword) { 

//   console.log("Please enter your password.");
// } else if (userPassword === correctPassword) { 

//   console.log("Correct! The password you entered matches the original password.");
// } else { 

//   console.log("Incorrect password.");
// }


// 6. This if/else statement does not work. Try to fix it: 
// var greeting; var hour = 13; if (hour < 18) { greeting = "Good day"; else greeting = "Good evening"; }


// var greeting; 
// var hour = 13; 
// if (hour < 18) { greeting = "Good day"}

// else {greeting = "Good evening" }

// console.log(greeting);


// 7. Write a program that takes time as input from user in 24 hours clock format 
// like: 1900 = 7pm. Implement the following case using if, else & else if statements



// var myTime = +prompt("Enter Time on 24 hourse format (0001 to 2359):");

if  ( myTime>=0 && myTime <1200) { alert("Good Morning");}
else if  ( myTime>=1200 && myTime <1700) { alert("Good Afternoon");}
else if  ( myTime>=1700 && myTime <2100) { alert("Good Evening");}
else if  ( myTime>=2100 && myTime <2359) { alert("Good Night");}
else  { alert("Ivalid Format");}
