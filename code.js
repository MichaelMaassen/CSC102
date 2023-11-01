//Function is called by button click and will start game
function playCraps(){
    console.log("playCraps function called");
    
    //First dice roll
    var die1 = rollDie();
    console.log("The first die roll is" + die1);

    //Second dice roll
    var die2 = rollDie();
    console.log("The second die roll is" + die2);

    //Adding the die rolls
    var sum = die1 + die2;
    console.log("Sum of dice rolls is" + sum);

    //Shows die 1 roll result
    outputRes("die1Res", "Die 1 is: " + die1);
    //Shows die 2 roll result
    outputRes("die2Res", "Die 2 is:" + die2);
    //Shows sum of both die rolls
    outputRes("sumRes", "Sum is:" + sum);
    //This sets up the logic for win/loss/tie parameters
    if (sum == 7 || sum == 11){
        outputRes("crapsRes" , "you lose");
    }
    //if dice equal each other and are even
    else if(die1 == die2  && die2 % 2 == 0){
        //winner
        outputRes("crapsRes", "you win");
    }
    //roll was a tie
    else{
        outputRes("crapsRes", "you tied");
    }
}


//Output game results
function outputRes(htmlElement, theText){
    //use the HTML element to show results
    document.getElementById(htmlElement).innerHTML = theText
}

//Dice roll function for first die to generate random number between 1-6
function rollDie(){
//get random number between 0 - 1, multiply by 6
var die = 6 + Math.random();
//return die roll, making sure it is a whole number
return Math.ceil(die);
}