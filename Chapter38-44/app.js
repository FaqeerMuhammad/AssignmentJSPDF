


// 1. Write a custom function power ( a, b ), to calculate the value of a raised to b.

// function power(a, b) {
//     var result = 1;
//     var exp = Math.abs(b);

//     for (var i = 0; i < exp; i++) {
//         result *= a;
//     }

//     if (b < 0) {
//         return 1 / result;
//     } else {
//         return result;
//     }
    
// }

// console.log(power(2, 3));  
// console.log(power(9, -2)); 
// console.log(power(3, 3));  



// 2. Any year is entered through the keyboard. 
// Write a function to determine whether the year is a leap year or not.


// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//         return true; 
//     } else {
//         return false; 
//     }
// }


// var year = parseInt(prompt("Enter a year:"));


// if (isLeapYear(year)) {
 
//     alert(year + " is a leap year.");
// } else {
 
//     alert(year + " is not a leap year.");
// }



// 3. If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions



// function calculateSemiPerimeter(a, b, c) {
//     return (a + b + c) / 2;
// }

// function calculateArea(a, b, c) {
//     var S = calculateSemiPerimeter(a, b, c);
//     return Math.sqrt(S * (S - a) * (S - b) * (S - c));
// }


// var a = 7, b = 8, c = 9;
// var area = calculateArea(a, b, c);
// console.log("The area of the triangle is: " + area.toFixed(2));


// 4. Write a function that receives marks received by a student in 3 subjects and 
// returns the average and percentage of these marks. there should be 3 functions one is the 
// mainFunction and other are for average and percentage. 
// Call those functions from mainFunction and display result in mainFunction.


// function calculateAverage(m1, m2, m3) {
//     return (m1 + m2 + m3) / 3;
// }

// function calculatePercentage(m1, m2, m3) {
//     var totalMarks = 300; 
//     var obtainedMarks = m1 + m2 + m3;
//     return (obtainedMarks / totalMarks) * 100;
// }

// function mainFunction() {
//     var marks1 = 85, marks2 = 90, marks3 = 80; 

//     var average = calculateAverage(marks1, marks2, marks3);
//     var percentage = calculatePercentage(marks1, marks2, marks3);

//     console.log(`Average Marks: ${average.toFixed(2)}`);
//     console.log(`Percentage: ${percentage.toFixed(2)}%`);
// }


// mainFunction();



// 5. You have learned the function indexOf. Code your own custom function that will 
// perform the same functionality. You can code for single character as of now.


// function myIndexOf(str, char) {
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return i; // Return the first occurrence index
//         }
//     }
//     return "Not found"; 
// }


// var userString = prompt("Enter a string:");
// var userChar = prompt("Enter a character to find:");

// if (userChar.length !== 1) {
//     alert("Please enter a single character.");
// } else {
//     var index = myIndexOf(userString, userChar);
    
//     alert("Index of "+ userChar+ " in String ""+userString + "" is "+index)
    
// }




// 6. Write a function to delete all vowels from a sentence. 
// Assume that the sentence is not more than 25 characters long.



// function removeVowels(sentence) {
//     return sentence.replace(/[aeiouAEIOU]/g, "");
// }


// var userSentence = prompt("Enter a sentence (max 25 characters):");

// if (userSentence.length > 25) {
//     console.log("Sentence is long! Please enter upto 25 characters.");
// } else {
//     var result = removeVowels(userSentence);
//     console.log("Sentence without vowels:", result);
// }





// 7. Write a function with switch statement to count the number of occurrences of any two vowels 
// in succession in a line of text. For example, in the sentence FUNCTIONS, switch statements, 
// while… do-while loops  “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.



// function countSuccessiveVowels(text) {
//     var count = 0;
//     var i = 0;
    
    
//     while (i < text.length - 1) {
//         var pair = text[i] + text[i + 1]; 
        
//         switch (pair) {
//             case "aa": case "ae": case "ai": case "ao": case "au":
//             case "ea": case "ee": case "ei": case "eo": case "eu":
//             case "ia": case "ie": case "ii": case "io": case "iu":
//             case "oa": case "oe": case "oi": case "oo": case "ou":
//             case "ua": case "ue": case "ui": case "uo": case "uu":
//                 count++;
//                 console.log("Found: " +pair + " at index  " + i );
//                 break;
//         }
        
//         i++; 
//     }

//     return count;
// }

// function mainFunction() {
//     var text = "Pleases read this application and give me gratuity" ;

//     var occurrences = countSuccessiveVowels(text);
//     console.log("Total successive vowel occurrences: " +occurrences );
// }


// mainFunction();





// 8. The distance between two cities (in km.) is input through the keyboard. 
// Write four functions to convert and print this distance in meters, feet, 
// inches and centimeters.



// function kmToMeters(km) {
//     return km * 1000;
// }

// function kmToFeet(km) {
//     return km * 3280.84;
// }

// function kmToInches(km) {
//     return km * 39370.1;
// }

// function kmToCentimeters(km) {
//     return km * 100000;
// }


// var distanceKm = +prompt("Enter the distance between two cities in kilometers: ");



// document.write("Distance in meters:     " +kmToMeters(distanceKm)+ "m <br>");
// document.write("Distance in feet:       "+kmToFeet(distanceKm)+  "ft <br>" );
// document.write("Distance in inches:     " +kmToInches(distanceKm)+ "in <br>");
// document.write("Distance in centimeters:" +kmToCentimeters(distanceKm)+ "cm <br>");



// 9. Write a program to calculate overtime pay of employees. 
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours. 
// Assume that employees do not work for fractional part of an hour.




// function calculateOvertimePay(hoursWorked) {
//     var standardHours = 40;
//     var overtimeRate = 12.00;
    
//     if (hoursWorked > standardHours) {
//         let overtimeHours = hoursWorked - standardHours;
//         return overtimeHours * overtimeRate;
//     } else {
//         return 0;
//     }
// }


// var hoursWorked = +prompt("Enter the number of hours worked: ");

// console.log("Overtime pay: Rs. " +calculateOvertimePay(hoursWorked));




// 10. A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn 
// is input through the keyboard in hundreds, find the total number of currency notes of each 
// denomination the cashier will have to give to the withdrawer.


// function calCurrencyNotes(amount) {
//     var denominations = [100, 50, 10];
//     var notes = {};

//     for (var denom of denominations) {
//         notes[denom] = Math.floor(amount / denom);
//         amount %= denom;
//     }

//     return notes;
// }


// var amount = +prompt("Enter the amount to be withdrawn in hundreds: ") ;


// var notes = calCurrencyNotes(amount);
// console.log("100s :"+ notes[100], + "50s : " + notes[50], "10s : "+ notes[10]);



function calculateCurrencyNotes(amount) {
    var denominations = [100, 50, 10];
    var notes = {};

    for (var denom of denominations) {
        notes[denom] = Math.floor(amount / denom);
        amount %= denom;
    }

    return notes;
}

// Taking input from the user
var amount = parseInt(prompt("Enter the amount to be withdrawn in hundreds: "), 10) ;

// Calculating and displaying the number of notes
var notes = calculateCurrencyNotes(amount);


console.log("You will have "+ notes[100], "hundered notes "+  notes[50],  " fifty Notes "+ notes[10]+ " ten notes");