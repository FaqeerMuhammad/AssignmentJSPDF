
// 1. Declare and initialize an empty multidimensional array. (Array of arrays)



let multiArray = [[], []]; 


// 2. Declare and initialize a multidimensional array representing the following matrix:


var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
  ];


//   3. Write a program to print numeric counting from 1 to 10.


// for (var i = 1; i <= 10; i++) {
//     document.write(i + " <br>");
//   }



//   4. Write a program to print multiplication table of any number using for loop. 
// Table number & length should be taken as an input from user.



// var num = +prompt("Enter the number for multiplication table:");
// var tLength = +prompt("Enter the length of the table:");


// document.write("<h2> Multiplication table of " + num + " & lenght is "+ tLength+ "</h2><br><br>")


// for (var i = 1; i <= tLength; i++) {
//   document.write( num + " x " + i + " = "+(num * i) + "<br>");
// }


// 5. Write a program to print items of the following array using 
// for loop: fruits = ["apple”, "banana”, "mango”, "orange”, "strawberry”]


//  var fruits = ["apple ", "banana" , "mango ", "orange", "strawberry"];

//  for (var i = 0; i < fruits.length; i++) 
//     {
     
//       document.write(fruits[i] + "<br>" );

//   }

//   for (var i = 0; i < fruits.length; i++) 
//     {
     
//       document.write("Element at index " +[i] + " is " + fruits[i] + " <br>" );

//   }


// 6. Generate the following series in your browser. See example output.

// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15


// document.write("Counting : " + " <br>" );

//   for (var i = 1; i <= 15; i++) 
//     {
     
//       document.write((i) + " <br>" );
//   }


  // b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1


  // document.write("Reverse Counting : " + " <br>" );

  // for (var i = 10; i > 0; i--) 
  //   {
     
  //     document.write((i) + " <br>" );
  // }

  // c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20


  // document.write("Even : " + " <br>" );

  //  for (var i = 1; i <= 20; i++) 
  
  //   {
  //       i=i+1;
  //       document.write((i) + " <br>" );
  //   }
  

  // d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19


  // document.write("Odd : " + " <br>" );

  //  for (var i = 1; i <= 20; i++) 
  
  //   {
      
  //       document.write((i) + " <br>" );
  //       i=i+1;
    
  //     }
 
  
      // e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k


// document.write("Series : " + " <br>" );

//    for (var i = 1; i <= 20; i++) 
  
//     {
//         i=i+1;
//         document.write((i) + "k <br>" );
//     }
  


    // 7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] 
    // Write a program to enable “search by user input” in an array. 
    // After searching, prompt the user whether the given item is found in the list or not. 
    

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
  
//   document.write( searchItem + "is <b>avaiable</b> at index "+ (i) + " in our Bakery <br>" );

// } else {

//   document.write( "We are sorry ," + searchItem + "is <b>not avaiable</b> in our Bakery <br>" );

// }


// 8. Write a program to identify the largest number in the given array. 
// array = [24, 53, 50,78, 91, 12 ,223,34,54,588,55].



// var array = [24, 53, 50,78, 91, 12 ,223,34,54,588,55];

// var num1 = array[0];


// for (var i = 1; i < array.length; i++) {

//   if (num1<array[i]) {

//       // console.log(num1);
//       num1=array[i]
      

//     }
// }

// document.write( "Array Items : " + array + " <br>" );

// document.write( "The largest Number in Array is " + num1 + " <br>" );




// 9. Write a program to identify the smallest number in the given array. 

// var array = [24, 53, 78, 91, 12,56,-4,677,-9,0]


// var num1 = array[0];


// for (var i = 1; i < array.length; i++) {

//   if (num1>array[i]) {

//       num1=array[i]
      
//     }
// }

// document.write( "Array Items : " + array + " <br>" );

// document.write( "The smallest Number in Array is " + num1 + " <br>" );





// 10. Write a program to print multiples of 5 ranging 1 to 100.



  for (var i = 1; i <= 100; i++) 
    {
     
      i=i+4;
      document.write((i) + " <br>" );
  }