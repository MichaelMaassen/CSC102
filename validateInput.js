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
});
