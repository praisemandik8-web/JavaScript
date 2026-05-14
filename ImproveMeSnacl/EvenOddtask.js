const prompt = require("prompt-sync")();

let number = prompt("Chairman, enter a number ");
    
    if(number % 2 == 0){
    console.log("Number is an even number");
    }
    else{
    console.log("Number is an odd number");
    }
