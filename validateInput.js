// This class is created to demonstrate inheritance
class polygon {
    constructor (sides) {
        this.sides = sides;

    }

    alertSides(){
        alert("this polygon has" + this.sides);
    }

    alertFormula(){
        alert("The area of this object is")
    }
}

class square extends polygon{
    constructor (length){
//Super refers to the parent of this child class
        super(4);
        this.length = length;
    }

    area(){
        alert(this.length * this.length);
    
    }

    alertFormula(){
        super.alertFormula();
        alert("...length squared")
    }
}

function validateInput(){
    event.preventDefault();
    let firstName = document.getElementById("fname").value;
    console.log(firstName);
    let lastName = document.getElementById("lname").value;
    console.log(lastName);
    let zip = document.getElementById("zip").value;
    console.log(zip);

    let firstLast = firstName + " " + lastName;
    console.log(firstLast);

    console.log(firstLast.length);

    if(firstLast.length < 20){
        alert("Not enough characters. First and last name must have at least 20 characters.")
        return;
    }
    console.log("First Last valid!");
//zip.lenth != 5
    if(!Number.isInteger(parseInt(zip))){
        alert("Invalid zip!");
        return;
    }
    let num = parseInt (zip);
    console.log("Valid zip!");
}

window.addEventListener("DOMContentLoaded", (event) => {
    const form = document.getElementById("myForm")
    if(form) {
       form.addEventListener("submit", validateInput); 
    }
// This is refering to my polygon class. the polygon object is in var poly
    var poly = new polygon(8);
    poly.alertFormula();
    poly.alertSides();

    var squares = new square(3);
//Calls alert formula for square and parent polygon (polymorphism)    
    squares.alertFormula();
    squares.area();
});
