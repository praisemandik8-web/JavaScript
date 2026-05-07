const prompt = require("prompt-sync")();
const order = {status: "pending"};
const userInput = prompt("Enter status(pending, shipped or delivered) ")
    
    if(userInput == "pending"){
        console.log("product is Processing...")}
    else if(userInput == "shipped"){
        console.log("product is Shipped. ")}
    else if(userInput == "delivered"){
        console.log("product is Delivered!")}
    else{console.log("invalid input, enter correct status.")}
    
