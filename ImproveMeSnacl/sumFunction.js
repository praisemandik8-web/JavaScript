const prompt = require("prompt-sync")();
function sum(number1, number2){
    number1 = Number(prompt("Enter first number, chief!"))
    number2 = Number(prompt("Enter second number, chief!"))
   // sumNum = number1 + number2;
    return  number1 + number2;
}

console.log(sum());
