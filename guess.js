var number = 7;
var guess = prompt("Guess a number");
if(guess<number){
    alert("Its too low, Keep Guessing!");
}
else if(guess==number){
    alert("Congrats! You get it right.");
}

else{
    alert("Its too high, Keep Guessing!");
}