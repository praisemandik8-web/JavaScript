const prompt = require("prompt-sync")();
userInput = +prompt("Enter number")

    if(userInput < 0){
    console.log("Negative")
    }
    else if(userInput > 0 ){
    console.log("Positive")}
    else{console.log("zero")}

