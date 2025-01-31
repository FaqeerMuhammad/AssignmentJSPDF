// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

var a = 60;
var b = 15;

var c;

c = a + b;

document.write("Sum of " + a + " and " + b + " is " + c + "<br> <br> <br>");

c = a * b;

document.write("Multiplication of " + a + " and " + b + " is " + c + "<br> <br>");


c = a / b;

document.write("Division of " + a + " and " + b + " is " + c + "<br> <br>");


c = a % b;

document.write("Module of " + a + " and " + b + " is " + c + "<br> <br>");



// 3. Do the following using JS Mathematic Expressions  . 


// a. Declare a variable. b. Show the value of variable in your browser like “Value after variable declaration is: ??”

var ab;

document.write("Value after variable declaration is " + ab + "<br> <br>");

// c. Initialize the variable with some number. d. Show the value of variable in your browser like “Initial value: 5”.

ab = 5;

document.write("Initial value: " + ab + "<br> <br>");


// e. Increment the variable. f. Show the value of variable in your browser like “Value after increment is: 6”

++ab;


document.write("Value after increment is " + ab + "<br> <br>");

// g. Add 7 to the variable. h. Show the value of variable in your browser like “Value after addition is: 13”

ab = ab + 7;

document.write("Value after addition is " + ab + "<br> <br>");

// i. Decrement the variable. j. Show the value of variable in your browser like “Value after decrement is: 12”.


--ab;


document.write("Value after decrement is " + ab + "<br> <br>");


//   k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”.

ab = ab % 3;


document.write("The reminder is " + ab + "<br> <br>");



// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets


var movieTicket = 600;

document.write("Total cost to buy 5 ticket to a movie is " + (movieTicket * 5) + "PKR <br> <br>");

// 5. Write a script to display multiplication table of any number in your browser.


var tNumber = 4;


for (i = 1; i <= 10; i++) {

    document.write(tNumber + " x " + i + " = " + (tNumber * i) + "<br>");


}



// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.


// a. Store a Celsius temperature into a variable.

var cTemp = 25;
var fTemp;


// b. Convert it to Fahrenheit & output “NNoC is NNoF”.


// c. Now store a Fahrenheit temperature into a variable.


fTemp = ((cTemp * 9 / 5) + 32)


document.write(cTemp + " C<sup>o</sup> is " + fTemp + " F<sup>o</sup> <br>");



fTemp = 70;

// d. Convert it to Celsius & output “NNoF is NNoC”.


cTemp = ((fTemp - 32) * 5 / 9)

document.write(fTemp + " F<sup>o</sup> is " + cTemp + " C<sup>o</sup> <br><br><br><br>");




// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables

// a. Price of item 1 
// b. Price of item 2
// c. Ordered quantity of item 1 
// d. Ordered Quantity of item 2 
// e. Shipping charges


priceItem1= 650;
priceItem2= 100;

qtyItem1= 3;
qtyItem2= 7;
shipCharges=100;


document.write( "<h1>Shopping Cart </h1>" + "<br>");

document.write( "Price of Item1 is " + priceItem1 + "<br><br>");
document.write( "Quantity of Item1 is " + qtyItem1 + "<br><br>");

document.write( "Price of Item2 is " + priceItem2 + "<br><br>");
document.write( "Quantity of Item2 is " + qtyItem2 + "<br><br>");

document.write( "Shiping Chares is " + shipCharges + "<br><br>");

document.write( "Total cost of your order is " + ((priceItem1*qtyItem1)+(priceItem2 * qtyItem2) + shipCharges ) + "<br><br><br><br>");


// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser

marksTotal=980;
marksObtain=804;
perVariable=marksObtain/marksTotal*100


document.write( "<h1>Marks Sheet </h1>" + "<br>");

document.write( "Total Marks : " + marksTotal + "<br>");
document.write( "Marks Obtain: " + marksObtain+ "<br>");

document.write( "Percentage : " + perVariable + "%<br><br>");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees.

// Perform all calculations in a single expression.


document.write( "<h1>Currency in PKR </h1>" + "<br>");

document.write("Total Currency in PKR : " + ((10*104.80)+ (25*28)) + "<br><br><br><br>");


// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
//  a. Add 5 
//  b. Multiply by 10 
//  c. Divide the result by 2 
//  Perform all calculations in a single expression

var tot=50;
result= (((tot+5)*10)/2);

document.write("Total : " + result + "<br><br>");



// 11. The Age Calculator: Forgot how old someone is? Calculate it! 
// a. Store the current year in a variable. 
// b. Store their birth year in a variable.

currentYear=2025;
birthYear=2001;

document.write( "<h1>Age Calculator</h1>" + "<br>");

document.write( "Current Year " + currentYear + "<br>");
document.write( "Birth Year " + birthYear + "<br>");
document.write( "Your Age is " + (currentYear-birthYear )+ "<br>");


// 12. The Geometrizer: Calculate properties of a circle. 

// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and output “The circumference is NN”.

// Calculate the area based on the radius, and output “The area is NN”


radCirle =20;

circumFerence=(2 * 3.142 *(radCirle));
areaofCircle= (radCirle*radCirle*3.142);

document.write( "<h1>The Geometrizer: </h1>" + "<br>");

document.write( "Radius of a Circle : " + radCirle + "<br>");
document.write( "The Circumference is : " + circumFerence + "<br>");
document.write( "The Area is : " + areaofCircle + "<br><br><br>");


// 13. The Lifetime Supply Calculator: Ever wonder how much 
// a “lifetime supply” of your favorite snack is? Wonder no more.

// a. Store your favorite snack into a variable 
// b. Store your current age into a variable. 
// c. Store a maximum age into a variable. 
// d. Store an estimated amount per day (as a number). 
// e. Calculate how many would you eat total for the rest of your life.

var snackName="Chocolate Chip";
var curAge =15;
var maxAge=65;
var amountSnak=3;


document.write( "<h1>The Lifetime Supply Calculator </h1>" + "<br>");
document.write( "Favirote Snack : " + snackName + "<br>");
document.write( "Current Age : " + curAge + "<br>");
document.write( "Estimated Maximum Age : " + maxAge + "<br>");
document.write( "Amount of snake per day : " + amountSnak + "<br>");

document.write( "You will need " +((((maxAge-curAge) * 365) )  )+ " Sncakes with amount of " + +((((maxAge-curAge) * 365) * 3 )  )+   " to last you until the ripe old age of  : " + maxAge + "<br>");
