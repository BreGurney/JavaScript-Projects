function subtract_Function() { 
    var Subtraction = 10 - 7;
    document.getElementById("Sub").innerHTML = "10 - 7 = " + Subtraction;
}

function addition_Function() {
    var Addition = 23 + 12;
    document.getElementById("Add").innerHTML = "23 + 12 = " + Addition;
}

function division_Function() {
    var simple_Math = 15 / 5;
    document.getElementById("Devide").innerHTML = "15 / 5 = " + simple_Math;
}

function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("Mult").innerHTML = "6 x 8 = " + simple_Math;
}

function math_Function() {
    var simple_Math = (1 + 2) * 10 / 2 -5;
    document.getElementById("More Math").innerHTML = "1 + 2, x 10, / 2, - 5 = " + simple_Math;
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Mod").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator() {
    var x = 10;
    document.getElementById("Math").innerHTML = -x;
}

function random() {
    document.getElementById("Ran").innerHTML = Math.random()*10;
}

function Increment() {
    var value = document.getElementById("IncrementText").innerHTML;
    value++;
    document.getElementById("IncrementText").innerHTML = value;
}

function decrease() {
    var value = document.getElementById("DecreaseText").innerHTML;
    value--;
    document.getElementById("DecreaseText").innerHTML = value;
}