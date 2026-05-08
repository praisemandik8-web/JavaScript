

const prompt = require("prompt-sync")();

let number = Number(prompt("Enter an integer between 0 and 1000: "));

let lastDigit = number % 10;
let remaining = Math.floor(number / 10);

let secondDigit = remaining % 10;
let firstDigit = Math.floor(remaining / 10);

let sum = firstDigit + secondDigit + lastDigit;

console.log("Sum of digits: " + sum);