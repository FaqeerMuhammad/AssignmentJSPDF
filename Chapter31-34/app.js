// 1. Write a program that displays current date and time in
// your browser.


// var now = new Date();
// document.write(now)



// 2. Write a program that alerts the current month in words.
// For example December.

// var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];


// var dt = new Date();
// var monthName = month[dt.getMonth()];

// document.write("Current Month is " + monthName)





// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.


//  var now = (new Date()).toString()

// var a = now.slice(0,3)

// alert("Today is "+ a );




// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.



//  var now = (new Date()).getDay()


// if ( now == 6 || now == 7)

// alert("Its Fun Day");

// else

// alert("Working Day");




// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.




//  var now = (new Date()).getDate()


// if ( now < 16)

// alert("First fifteen days of the month " );

// else

// alert("Last days of the month " );




// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// var now = new Date();
// var minutesSinceEpc = (new Date().getTime() / 60000);
// var secondsSinceEpc = (new Date().getTime() );

// document.write(now+"<br>")
// document.write("Elapsed Milliseconds Since January 1 , 1970 :  "+secondsSinceEpc+"<br>")
// document.write("Elapsed Minutes Since January 1 , 1970 :  "+minutesSinceEpc+"<br>")




// 7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.


// var currentHour = new Date().getHours();

// if (currentHour < 12) {
//   alert("It's AM");
// } else {
//   alert("It's PM");
// }


// 8. Write a program that creates a Date object for the last day of the last month of 2020
//  and assigns it to variable named laterDate.


// var laterDate = new Date(2020, 11, 31); 
// alert("Later Date : "+ laterDate);



// 9. Create a date object of the starting date of this Ramadan and alert the number of 
// days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015


// var ramadanStartDate = new Date(2015, 5, 18);  
// var currentDate = new Date();  


// var timeDifference = currentDate - ramadanStartDate;

// var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));


// alert( daysPassed + " days passed since 1st Ramadan 2015");



// 10. Write a program that displays in your browser the seconds that elapsed between 
// the reference date and the beginning of 2015.





// var referenceDate = new Date();  


// var startOf2015 = new Date(2015, 0, 1);  

// var timeDifference = referenceDate - startOf2015;


// var secondsElapsed = Math.floor(timeDifference / 1000);


// alert("On Reference Date "+ referenceDate + " , " +  + secondsElapsed + " seconds passed since begening of 2015");



// 11. Create a Date object for the current date and time.Extract the hours, reset the date object 
// an hour ahead and finally display the date object in your browser.




// var currentDate1 = new Date();
// var currentDate2 = new Date(currentDate1); 

// var currentHours = currentDate1.getHours();
// currentDate1.setHours(currentHours - 1); 

// alert("Current Date: " + currentDate2 + "\n1 hour ago, it was: " + currentDate1);




// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?



// var currentDate1 = new Date();
// var currentDate2 = new Date(currentDate1); 

// currentDate1.setFullYear(currentDate1.getFullYear() - 100);


// alert("Current Date: " + currentDate2 + "\n1 100 years back , it was: " + currentDate1);



// 13. Write a program to ask the user about his age. 
// Calculate and show his birth year in your browser.



// var userAge = +prompt("Please enter your age:");


// var currentYear = new Date().getFullYear();

// var birthYear = currentYear - userAge;


// document.write("Your age is " + userAge + "<br> Your Birth Year is " + birthYear)



// 14. Write a program to generate your K-Electric bill in your browser. 
// All the amounts should be rounded off to 2 decimal places.


var customerName = prompt("Enter Customer Name:");
var currentDate = new Date();
var currentMonth = currentDate.toLocaleString("default", { month: "long" }); 
var numberOfUnits = +(prompt("Enter number of units consumed:"));
var chargesPerUnit = 18; 
var latePaymentSurcharge = 350; 


var netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);
var grossAmountPayable = (parseFloat(netAmountPayable) + latePaymentSurcharge).toFixed(2);


document.write ( "<h1>K-Electric Bill </h1> <br><br>")

document.write ( "Customer Name    : <b> " + customerName +" </b> <br>")
document.write ( "Month            : <b> " + currentMonth +" </b> <br>")
document.write ( "Numbers of Units : <b> " + numberOfUnits +" </b> <br>")
document.write ( "Charges per Unit : <b> " + chargesPerUnit +" </b> <br><br>")


document.write ( "Net Amount Payable within Due Date : <b>Rs. " + netAmountPayable +" </b> <br>")
document.write ( "Late Payment Surcharge             : <b>Rs. " +  latePaymentSurcharge +" </br> ")
document.write ( "Gross Amount Payable after Due Date: <b>Rs. " + grossAmountPayable +" </b> ")

