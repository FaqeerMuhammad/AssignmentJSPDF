// STRING METHODS


// 1. Write a program that takes two user inputs for first and last name using prompt and 
// merge them in a new variable titled fullName. Greet the user using his full name.


// var firstName=prompt("Enter First Name");
// var lastName=prompt("Enter Last Name");
// var fullName=firstName+lastName;

// alert("Greet , " +fullName );


// 2. Write a program to take a user input about his favorite mobile phone model. 
// Find and display the length of user input in your browser


// var mobile =prompt("Enter Detail of Your Favrit Mobile");

//  alert ("My Favrit Phone is : " + mobile + "\n Length of string is "+ mobile.length);



//  3. Write a program to find the index of varter “n” in the 
//  word “Pakistani” and display the result in your browser .


// var word="Pakistani"

// alert ("String : " + word + "\n Index of  'n' :"+ word.indexOf("n"));


// 4. Write a program to find the last index of varter “l” in the 
// word “Hello World” and display the result in your browser.


// var word="Hello World"

// alert ("String : " + word + "\n Last index of  'l' : "+ word.lastIndexOf("l"));


// 5. Write a program to find the character at 3rd index in the word “Pakistani” 
// and display the result in your browser.


// var word="Pakistani"

// alert ("String : " + word + "\n Character at Index 3 : "+ word.charAt(3));



// 6. Repeat Q1 using string concat() method.


// var firstName=prompt("Enter First Name");
// var lastName=prompt("Enter Last Name");
// var fullName=firstName.concat(" " ,lastName);

// alert("Greet , " +fullName );


// 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” 
// and display the result in your browser.


// var city = "Hyderabad";

// var newCity = city.replace("Hyder", "Islam");

// alert ("City : " +  city + "\n After replacement : "+ newCity);


// 8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. 
// var message = “Ali and Sami are best friends. They play cricket and football together.”;




// var text = "Ali and Sami are best friends. They play cricket and football together.";
// var newtext = text.replaceAll("and", "&");

// document.write("Old Text :" + text + "<br>");

// document.write("New Text :" + newtext);


// 9. Write a program that converts a string “472” to a number 472. 
// Display the values & types in your browser.


// var str="472";

// var num= Number (str);


// document.write("Value :" + str + "<br>");
// document.write("Type  :" + typeof(str) + "<br><br>");

// document.write("Value :" + num + "<br>");
// document.write("Type  :" + typeof(num) + "<br>");



// 10. Write a program that takes user input. Convert and show the input in capital letters.


// var userTextS=prompt("Please Enter Some Text in small letters");

// var userTextU= userTextS.toUpperCase();

//  document.write("User Input :" + userTextS + "<br>");
//  document.write("Upper Case :" + userTextU + "<br>");



// 11. Write a program that takes user input. Convert and show the input in title case.


// var userText1=prompt("Please Enter Some Text in any letters");

// var userText2= userText1.charAt(0).toUpperCase() + (userText1.slice(1)).toLowerCase();

//  document.write("User Input :" + userText1 + "<br>");
//  document.write("Tile Case  :" + userText2 + "<br>");


// 12. Write a program that converts the variable num to string. var num = 35.36 ; 
// Remove the dot to display “3536” display in your browser.


// var num = 35.36;

// var str = num.toString();

// str =  str.replace(".", "");


// document.write("<b>Number :" + num + " </b> <br>");
// document.write("<b>Result :" + str + " </b> <br>");



// 13. Write a program to take user input and store username in a variable. 
// If the username contains any special symbol among [@ . , !], 
// prompt the user to enter a valid username. For character codes of [@ .


// var username = prompt("Enter your username:");
        


// while (true) {
//     var isValid = true;

//     for (var i = 0; i < username.length; i++) {
//         var charCode = username.charCodeAt(i);

//           if (charCode === 64 || charCode === 46 || charCode === 44 || charCode === 33) 
//             { 
//                 isValid = false;
//                 break;
//              }
//     }

//     if (isValid) {
//         break; 
//     } else {
//         alert("Invalid username! ");
//         username = prompt("Enter a valid username:");
//     }
// }

// alert("Username saved successfully: " + username);



// 14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] 
// Write a program to enable “search by user input” in an array. After searching, 
// prompt the user whether the given item is found in the list or not. Note: 
// Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, 
// program should inform about its availability.







// var arrayBak = ["cake", "apple pie", "cookie", "chips", "patties"];


// var searchItem = prompt("Welcome to ABC Bckery. What do you want to order Sir/Ma'am ?").trim().toLowerCase();

// var found = false;


// for (var i = 0; i < arrayBak.length; i++) {
//     if (arrayBak[i].toLowerCase() === searchItem) {

//       found = true;
//         break;
//     }
// }


// if (found) {
  
//   document.write( searchItem + " is <b>avaiable</b> at index "+ (i) + " in our Bakery <br>" );

// } else {

//   document.write( "We are sorry ," + searchItem + " is <b>not avaiable</b> in our Bakery <br>" );

// }





// 15. Write a program to take password as an input from user. The password must qualify these requirements: 
// a. It should contain alphabets and numbers 
// b. It should not start with a number 
// c. It must at least 6 characters long If the password does not meet above requirements, 
// prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, 
// refer to ASCII table at the end of this document.



// var password = prompt("Enter your password:");

// // ******Loop until password meets all the conditions ******
// while (true) {
//     var isValid = true;

//     // Check if password is at least 6 characters long
//     if (password.length < 6) {
//         isValid = false;
//     }

//     // ******Check if the password starts with a number (ASCII for 0-9 is between 48 and 57)******
//     if (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57) {
//         isValid = false;
//     }

//     // ******Check if password contains both alphabets (ASCII for a-z: 97-122, A-Z: 65-90) and numbers (ASCII for 0-9: 48-57)******
//     var hasAlphabet = false;
//     var hasNumber = false;

//     for (var i = 0; i < password.length; i++) {
//         var charCode = password.charCodeAt(i);

//         if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
//             hasAlphabet = true;
//         } else if (charCode >= 48 && charCode <= 57) {
//             hasNumber = true;
//         }
//     }

//     // ******Check if it contains both alphabet and number******
//     if (!hasAlphabet || !hasNumber) {
//         isValid = false;
//     }

//     if (isValid) {
//         break; // ******Valid password, exit loop******
//     } else {
//         alert("Invalid password! It should contain both alphabets and numbers, not start with a number, and be at least 6 characters long.");
//         password = prompt("Enter a valid password:");
//     }
// }

// alert("Password saved successfully!");



// 16. Write a program to convert the following string to an array using string split method. 
// var university = “University of Karachi”; Display the elements of array in your browser.


// var university = "University of Karachi";
// var universityArray = university.split(""); 


// for (var i = 0; i < universityArray.length; i++) {
//     document.write(universityArray[i] + "<br>");  
// }



// 17. Write a program to display the last character of a user input.


// var userInput=prompt("Please Enter Some Text ");

// var lastChar = userInput.charAt(userInput.length - 1);

// document.write( "User Input " + userInput + "<br>");  
// document.write("Last Character of " +  lastChar);  


// 18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count 
// number of occurrences of word “the” or "The" in given string.


var sentence = "The quick brown fox jumps over the lazy dog";
var wordsArray = sentence.toLowerCase().split(" ");  



var count = 0;


for (var i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i] === "the") {
        count++;
    }
}

alert("Text : " + sentence + "<br>"); 

alert("There are " + count + " occurrences of word 'the' "); 


