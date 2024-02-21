//Boolean datatype
var X = true;

//Printing data type of the variable X
document.write(typeof X);
document.write("<br>");

//combining a string and a number
document.write("30" + 30);
document.write("<br>");

// the == operator
document.write(2 == 2);
document.write("<br>");

//the === operator
X = 1;
Y = 1;
document.write(X == Y);
document.write("<br>");

//The > and && operator
document.write(13 > 5 && 11 > 8);
document.write("<br>");

// The < and || operator
document.write(11 < 5 || 13 < 6);

//The ! operator
function not_Function() {
    document.getElementById("Not").innerHTML = !(6 > 7);
}