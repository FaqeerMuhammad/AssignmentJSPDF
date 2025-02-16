// 1. Write a function that displays current date & time in your browser.


// function showDateTime() {
//     var now = new Date();

//     document.write(now)

// }

// showDateTime();



// 2. Write a function that takes first & last name and then it greets the user using his full name.


// function greetUser() {


// userFirstName= prompt("Enter your first name")
// userLasttName= prompt("Enter your last name")
// document.write( "Greet "+ userFirstName+ " " +userLasttName)


// }

// greetUser();


// 3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.


// function addNumbers() {
//     var num1 = +prompt("Enter 1st Number") 
//     var num2 = +prompt("Enter 2nd Number") 
    
//     if (!isNaN(num1) && !isNaN(num2)) {
//         var sum = num1 + num2;
//         document.write( "Sum of "+num1 + "&"+ num2 + " is " + sum)
        
//     } else {
//         alert("Please enter valid numbers.");
//     }
// }


// addNumbers();





// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.



        // function calculate() {
        //     var num1 = +prompt("Enter first number:");
        //     var num2 = +prompt("Enter second number:");
        //     var operator = prompt("Enter operator (+, -, *, /):");
        //     var result=0;

        //     if (operator === '+') {
        //         result = num1 + num2;
        //     } else if (operator === '-') {
        //         result = num1 - num2;
        //     } else if (operator === '*') {
        //         result = num1 * num2;
        //     } else if (operator === '/') {
        //         result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
        //     } else {
        //         result = "Invalid operator";
        //     }

        //     document.write(`Result: ${result}`);
        // }



        // 5. Write a function that squares its argument.


        // function squareNumber(num) {
        //     return num * num;
        // }

        // document.write( squareNumber( +prompt("Enter your Number for square")   ));



        // 6. Write a function that computes factorial of a number.


    //     function factorial(num) {
    //         if (num < 0) return ;
    //         if (num === 0 || num === 1) return 1;

    //         var result = 1;
    //         for (var i = 2; i <= num; i++) {
    //             result *= i;
    //         }
    //         return result;
    //     }


    //    document.write( factorial( +prompt("Enter Number for factorial ")   ));



    // 7. Write a function that take start and end number as inputs
    // & display counting in your browser



        // function displayCounting() {
        //     var start = +prompt("Enter the start number:");
        //     var end = +prompt("Enter the end number:");

        //     if (!isNaN(start) && !isNaN(end)) {
        //         if (start <= end) {
        //             document.write("<h2>Counting:</h2>");
        //             for (var i = start; i <= end; i++) {
        //                 document.write(i + "<br>");
        //             }
        //         } else {
        //             document.write("Start number should be less than or equal to end number.");
        //         }
        //     } else {
        //         document.write("Please enter valid numbers.");
        //     }
        // }

        // displayCounting() ;




        // 8. Write a nested function that computes hypotenuse of a right angle triangle.
        //     Hypotenuse2 = Base2 + Perpendicular2



        // function calculateHypotenuse(base, perpendicular) {
        //     function calculateSquare(num) {
        //         return num ** 2;
        //     }
            
        //     var hypotenuseSquared = calculateSquare(base) + calculateSquare(perpendicular);
        //     var hypotenuse = Math.sqrt(hypotenuseSquared);
        //     return hypotenuse;
        // }
        
        
        // var base = parseFloat(prompt("Enter base: "));
        // var perpendicular = parseFloat(prompt("Enter perpendicular: "));
        // console.log("Hypotenuse:", calculateHypotenuse(base, perpendicular));
        


        // 9. Write a function that calculates the area of a rectangle.
        //     A = width * height
        //     Pass width and height in following manner:

        


        // //     i. Arguments as value
        // function calculateArea(width, height) {
        //     return width * height;
        // }
        
        // console.log(calculateArea(5, 10)); // Output: 50
        


        // //     ii. Arguments as variables

        // function calculateArea(width, height) {
        //     return width * height;
        // }
        
        // var w = 7;
        // var h = 4;
        // console.log(calculateArea(w, h));
        


        // 10. Write a JavaScript function that checks whether a passed string is palindrome or not?
        //     A palindrome is word, phrase, or sequence that reads the same backward as
        //     forward, e.g., madam.



        // function isPalindrome(str) {
            
        //     str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
        
         
        //     var reversedStr = str.split('').reverse().join('');
        
            
        //     return str === reversedStr;
        // }
        
        
        // console.log(isPalindrome("madam"));      
        // console.log(isPalindrome("hello"));      
        // console.log(isPalindrome("A man, a plan, a canal: Panama")); 
        


        // 11. Write a JavaScript function that accepts a string as a parameter and converts 
        // the first varter of each word of the string in upper case.


        // function capitalizeWords(str) {
        //     return str.split(' ') 
        //               .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
        //               .join(' '); 
        // }
        
        // console.log(capitalizeWords('the quick brown fox')); 
        



        // 12. Write a JavaScript function that accepts a string as a parameter and find the 
        // longest word within the string.
        // EXAMPLE STRING : 'Web Development Tutorial'



        // function findLongestWord(str) {
        //     var words = str.split(' '); 
        //     var longestWord = ''; 
        
        //     for (var word of words) {
        //         if (word.length > longestWord.length) {
        //             longestWord = word; 
        //         }
        //     }
        
        //     return longestWord;
        // }
        

        // console.log(findLongestWord('Web Development Tutorial Advance JavaScript')); 
        




        // 13. Write a JavaScript function that accepts two arguments, a string and a letter and 
        // the function will count the number of occurrences of the specified letter within the string.
        // Sample arguments : 'JSResourceS.com', 'o



        // function countLetterOccurrences(str, letter) {
        //     let count = 0;
        
        //     for (var char of str) {
        //         if (char === letter) {
        //             count++; 
        //         }
        //     }
        
        //     return count;
        // }
                
        // console.log(countLetterOccurrences('JSResourceS.com', 'r')); 
        


        // 14.The Geometrizer

        // Create 2 functions that calculate properties of a circle, using the definitions here.
        // Create a function called calcCircumference:
        // Pass the radius to the function.
        // Calculate the circumference based on the radius, and output
        // "The circumference is NN".
        // Create a function called calcArea:
        // Pass the radius to the function.
        // Calculate the area based on the radius, and output "The area is NN".
        // Circumference of circle = 2πr
        // Area of circle = πr2



        function calcCircumference(radius) {
            var circumference = 2 * Math.PI * radius;
            console.log("The circumference is " + circumference.toFixed(2));
        }
        

        calcCircumference(5); 
        


        function calcArea(radius) {
            var area = Math.PI * Math.pow(radius, 2);
            console.log("The area is " + area.toFixed(2));
        }
                
        calcArea(5); 
        