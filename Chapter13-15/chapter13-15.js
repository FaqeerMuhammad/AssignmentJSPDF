// Array

// 1. Declare an empty array using JS literal notation to store student names in future.


var studentName = [];

// 2. Declare an empty array using JS object notation to store student names in future.


var studentsName = {
   names: []
};


// 3. Declare and initialize a strings array.


var EmpName = ["Jaffar Aman", "Ahmed Raza", "Faqeer Muhammad"];


// 4. Declare and initialize a numbers array.

var numbers = [10, 20, 30, 40, 50];

// 5. Declare and initialize a boolean array.

var flags = [true, false, true, false];


// 6. Declare and initialize a mixed array.

var mixedArray = [50, "Hello", true, null];


// 7. Declare and Initialize an array and store available education qualifications in Pakistan 
// (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). 
// Show the listed qualifications in your browser like:



// var qualifications = ["SSC", "HSC", "BSC" , "BS", "BA" , "MSC" , "MS", "MA" , "M.Phill", "PhD" ];

// document.write ( "Qualification <br>")

// for ( var i=0 ; i < qualifications.length ; i++ )

//     {

//         document.write ( i+1 + " ) " +qualifications[i]+"<br>")

//     }


// 8. Write a program to store 3 student names in an array.
// Take another array to store score of these three students. 
// Assume that total marks are 500 for each student, display the scores & percentages of students like:




// var students = ["Ahmed", "Owais", "Imran"];
// var scores = [460, 410, 385];  


// for (var i = 0; i < students.length; i++) 
//     {
//     var studentName = students[i];
//     var studentScore = scores[i];
//     var percentage = (studentScore / 500) * 100;  

//     document.write("Score of " + studentName + " is " + studentScore + " Percentage: " +percentage.toFixed() + " % <br>" );

//     }



// 9. Initialize an array with color names. Display the array elements in your browser.


// var colors = ["Red", "Green", "Blue", "Yellow" ];

//  for (var i = 0; i < colors.length; i++) {

//     document.write(colors[i] +"<br>");

//  }


//  a. Ask the user what color he/she wants to add to the beginning & 
//  add that color to the beginning of the array. 
//  Display the updated array in your browser.

// var colors = ["Red", "Green", "Blue", "Yellow"];

// var newColor = prompt("What color would you like to add to the beginning of the array?");

// colors.unshift(newColor);

// for (var i = 0; i < colors.length; i++) 
// {

//    document.write(colors[i] + "<br>");

// }


// b. Ask the user what color he/she wants to add to the end &
// add that color to the end of the array.
// Display the updated array in your browser.


// var colors = ["Red", "Green", "Blue", "Yellow"];

// var newColor = prompt("What color would you like to add to the end of the array?");

// colors.push(newColor);

// for (var i = 0; i < colors.length; i++) 
// {

//    document.write(colors[i] + "<br>");

// }



// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser. 


// var colors = ["Red", "Green", "Blue", "Yellow"];

// colors.unshift("Orange" , "Pink");


// for (var i = 0; i < colors.length; i++) 
// {

//    document.write(colors[i] + "<br>");

// }




// d. Delete the first color in the array. Display the updated array in your browser.


// var colors = ["Red", "Green", "Blue", "Yellow" , "Orange" , "Pink"];


// colors.shift();


// for (var i = 0; i < colors.length; i++) 
// {

//    document.write(colors[i] + "<br>");

// }



// e. Delete the last color in the array. Display the updated array in your browser.



// var colors = ["Red", "Green", "Blue", "Yellow" , "Orange" , "Pink"];

// colors.pop();

// for (var i = 0; i < colors.length; i++) 
// {

//    document.write(colors[i] + "<br>");

// }



// f. Ask the user at which index he/she wants to add a color & color name. 
// Then add the color to desired position/index. . 
// Display the updated array in your browser.


// var colors = ["Red", "Green", "Blue", "Yellow" , "Orange" ];


// var index = +prompt("Note: 1st value of array start from 0 index, enter the index where you want to add a new color:");
// var newColor = prompt("Enter the color name to add:");



// if (!isNaN(index) && index >= 0 && index <= colors.length) {


//        colors.splice(index, 0, newColor); // Insert color at the given index
// } else {
//     alert("Invalid index. No changes made.");
// }

// for (var i = 0; i < colors.length; i++) 
// {

//    document.write(colors[i] + "<br>");

// }



// g. Ask the user at which index he/she wants to delete color(s) & 
// how many colors he/she wants to delete. Thenremove the same number of color(s) from user-defined position/index. . 
// Display the updated array in your browser.

// var colors = ["Red", "Green", "Blue", "Yellow" , "Orange", "Pink" ];


// var index = +(prompt("Enter the index from where you want to delete color(s):"));
// var count = +(prompt("Enter how many colors you want to delete:"));


// if (!isNaN(index) && index >= 0 && index < colors.length && !isNaN(count) && count > 0) {
//     colors.splice(index, count); 
// } else {
//     alert("Invalid input. No changes");
// }

// for (var i = 0; i < colors.length; i++) 
// {

//    document.write(colors[i] + "<br>");

// }

// 10. Write a program to store student scores in an array & 
// sort the array in ascending order using Array’s sort method.


// var scores = [285, 172, 296, 160, 389, 275, 191, 267];


// document.write( "Before Sort " + scores + "<br><br>");


// scores.sort((a, b) => a - b);


// document.write( "After Sort <br><br>");

// for (var i = 0; i < scores.length; i++) 
// {

//    document.write(scores[i] + "<br>");

// }




// 11. Write a program to initialize an array with city names. 
// Copy 3 array elements from cities array to selectedCities array.


// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// document.write( "Cities Arrary " + cities + "<br><br>");


// var selectedCities = cities.slice(2, 4); 

// document.write( "Selected Cities " + selectedCities + "<br><br>");



// 12. Write a program to create a single string from the below mentioned array: 
// var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)


// var arr = [  "This" , "is" , "my", "cat"];

// document.write( "Arrays <br>" + arr + "<br><br>");

// var text = arr.join(" ");


// document.write( "String <br>" + text + "<br><br>");



// 13. Create a new array. Store values one by one in 
// such a way that you can access the values in 
// the order in which they were stored. (FIFO-First In First Out)



// var newarray = [];


// newarray.push("Key Board");
// newarray.push("Mouse");
// newarray.push("Printer");
// newarray.push("Monitor");

//  document.write( "Devices <br>" + newarray + "<br><br>");


// var processedValues = [];
// while (newarray.length > 0) {
//     processedValues.push(newarray.shift()); 

//    }

//    document.write( "Process Arrays <br>" + processedValues + "<br><br>");




   // 14. Create a new array. Store values one by one in such a way that you can access the values 
   // in reverse order. (Last In-First Out)


   
// var newarray = [];


// newarray.push("Key Board");
// newarray.push("Mouse");
// newarray.push("Printer");
// newarray.push("Monitor");

//  document.write( "Devices <br>" + newarray + "<br><br>");


// var processedValues = [];
// while (newarray.length > 0) {
//     processedValues.push(newarray.pop()); 

//    }

//    document.write( "Process Arrays <br>" + processedValues + "<br><br>");






   // 15. Write a program to store phone manufacturers 
   // (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. 
   // Display the following dropdown/select menu in your browser using document.write() method:



   var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];


    document.write('<select>'); 

    
    for (let i = 0; i < manufacturers.length; i++) {
        document.write('<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>');
    }
