//Ternary operation with input
function Ride_Function() {
    var Height = document.getElementById("Height").value;
    var Can_ride = (Height < 52) ? "You are too short " : "You are tall enough ";
    document.getElementById("Ride").innerHTML = Can_ride + "to ride";
}

//Utiilizing "new" and "this"
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Leslie = new Vehicle("Ford", "Mustang", 2019, "Black");
var John = new Vehicle("Kia", "Soul", 2018, "Blue");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Leslie drives a " + Leslie.Vehicle_Color + "-colored " + Leslie.Vehicle_Model + 
    " manugactured in " + Leslie.Vehicle_Year;
}

//Nested Function
function add_Strings() {
    var start_string = "Hello";

    function Adding(str) {
        start_string = start_string + " " + str;
    }
    Adding("There");
    document.getElementById("Nested_Function").innerHTML = start_string;
}