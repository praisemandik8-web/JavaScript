const prompt = require("prompt-sync")();

let pin = Number(prompt("Enter your pin: "));

if(pin == 1234){
console.log("Valid PIN, Balance = $1000");
}
else {
console.log("Invalid PIN");
}
