

// 1. Declare 3 variables in one statement.

var abc, xyz , pqr ;


// 2. Declare 5 legal & 5 illegal variable names.


// a ) Legal variable 

var myVariable;
var _myVariable;
var variable123;
var varName;
var $myVariable;

// b ) ilLegal variable 

// var my   Name; // space not allowed

// var #name ;  // variable name can contain only letters, numbers, dollar signs, and underscores.

// var let ;  // Reserved keyword not allowed

// var my-variable ; //Hyphens are not allowed in variable names

// var 5name ; // variable can’t start with a number.


// 3. Display this in your browser


var myText= "Rules for naming JS variables ";

var vRule1= "letters";
var vRule2= "Numbers";
var vRule3= "$";
var vRule4= "_";
var vRule5= "case sensitive";
var vRule6= "Keyword";

 
document.write( "<h1>" + myText + "</h1> <br><br><br>");

document.write( "Variable names can only contain " +vRule1 + " , " +vRule2 + " , " + vRule3 + " and " +vRule4 );

document.write( "<br> For example $my_1stVariable ");

document.write( "<br> Variable names are "  + vRule5 );

document.write( "<br> Variable names should not be JS "  + vRule6 );
