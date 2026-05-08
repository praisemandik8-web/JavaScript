

const prompt = require("prompt-sync")();

let num = Number(prompt("Enter a three-digit integer: "));

num = Math.abs(num);

let firstDigit = Math.floor(num / 100);
let lastDigit = num % 10;

if (firstDigit === lastDigit) {
    console.log("The number is a palindrome.");
} else {
    console.log("The number is not a palindrome.");
}