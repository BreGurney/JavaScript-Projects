function full_Sentence() { //to show as a full sentence
    var part_1 = "This is ";
    var part_2 = "a sentance ";
    var part_3 = "that I ";
    var part_4 = "have made ";
    var part_5 = "using coding.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4, part_5);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() { //to cut a sentence to one word
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function string_Method() { //to string a number
    var X = 178;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() { //To limit the amout of numbers shown
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}