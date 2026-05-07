const prompt = require("prompt-sync")();

let firstNum = prompt("Enter first number ")
let secondNum = prompt("Enter second number ")

let temp = firstNum
 firstNum = secondNum
 secondNum = temp

console.log("first number after swap is", firstNum)
console.log("second number after swap is", secondNum)

//c = a
//a = b
//b = c

