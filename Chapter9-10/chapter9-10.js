// 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”


// var city = prompt("Enter City Name");


// if (city==="Karachi")

//     {

//         alert("Welcome to city of lights");
//     }

    // 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. 
    // If the user is female, give the message: Good Morning Ma’am.



// var user = prompt("Enter Your Gender");

// if (user==="Male")
//     {
//         alert("Good Morning Sir");
//     }
//     else if (user==="Female")
//     {
//         alert("Good Morning Ma’am");
//     }
//     else {
//         alert("Enter Correct Gender");
//     }

    // 3. Write a program to take input color of road traffic signal from the user & 
    // show the message according to this table:

    
// var userTraffic = prompt("Enter Signal Color");

// if (userTraffic ==="Red")
//     {
//         alert("Must Stop");
//     }
//     else if (userTraffic==="Yellow")
//     {
//         alert("Ready to move");
//     }

//     else if (userTraffic==="Green")
//         {
//             alert("Move now");
//         }
    
//     else {
//         alert("InCorrect Color");
//     }

    // 4. Write a program to take input remaining fuel in car (in litres) from user. 
    // If the current fuel is less than 0.25litres, 
    // show the message “Please refill the fuel in your car”

    
// var fuelTank = +prompt("Enter Fuel Tank Reading");

// if (fuelTank < 0.25)
//     {
//         alert("Please refill the fuel in your car");
//     }
    
//     else {
//         alert("Fuel Tanks is OK");
//     }


    // 5. Run this script, & check whether alert message would be displayed or not. Record the outputs.

    // a. 
    
    // var a = 4; 
    // if (++a === 5){ alert("a-given condition for variable a is true"); }

    // // b. 
    // var b = 82; if (b++ === 83){ alert("b-given condition for variable b is true"); }

    // // c. 
    // var c = 12; 
    // if (c++ === 13){ alert("condition 1 is true" + c); } 
    // if (c === 13){ alert("condition 2 is true" + c); } 
    // if (++c < 14){ alert("condition 3 is true" + c); } 
    // if(c === 14){ alert("condition 4 is true"+ c); }


    // d. 
    // var materialCost = 20000; 
    // var laborCost = 2000; 
    // var totalCost = materialCost + laborCost; 
    // if (totalCost === laborCost + materialCost){ alert("The cost equals"); }


    // e. 
    
    // if (true)
    //     { alert("True"); } 
    // if (false){ alert("False"); }

    // // f. 
    
    // if("car" < "cat"){ alert("car is smaller than cat"); }



    // 6. Write a program to take input the marks obtained in three subjects & total marks. 
    // Compute & show the resulting percentage on your page. 
    // Take percentage & compute grade as per following table:


    var totalMarks = +prompt("Enter Total Marks");
    var obtainMarks = +prompt("Enter Obtain Marks");
    var percentageget=(obtainMarks/totalMarks*100)
    var grade,remarks;
    var flag=true;

    if (percentageget>100)

        {
            alert (" Wrong entery");

            flag=false;
        }

    if ( percentageget >= 79.51) {

        grade="A-one";
        remarks="Exelent";
    }
    
    else if ( percentageget >= 69.51) {

        grade="A";
        remarks="Good";
    }

    else if ( percentageget >= 59.51) {

        grade="B";
        remarks="You need improvement";
    }

    
    else if ( percentageget < 59.51) {

        grade="Fail";
        remarks="Sorry";
    }


    if (flag)
    {
    document.write("<h1> Marks Sheet</h1> <br><br>" );

    document.write("<h4> Total Marks   : " +totalMarks +"</h4>" );
    document.write("<h4> Marks Obtained: " + obtainMarks +"</h4> " );
    document.write("<h4> Percetage: " + percentageget.toFixed() +"</h4> " );
    document.write("<h4> Grade : " +grade +"</h4>" );
    document.write("<h4> Remarks : " +remarks +"</h4>" );
    }

