function my_Dictionary() {
    var Details = {
        Name: "Leslie James",//This is an imagainary person.
        Province: "British Columbia",
        Location: "Kalowna",
        Age: "54"
    };
    delete Details.Age; //This Function Deletes the specified details.
    document.getElementById("Dictionary").innerHTML = Details.Age;
}
