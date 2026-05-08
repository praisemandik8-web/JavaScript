const input = require("prompt-sync")();

let number = Number(input("Enter a number: "));

let reversed = 0;
while(number != 0){
let lastDigit = number % 10;
reversed = (reversed * 10) + lastDigit;
number = Math.floor(number / 10);
}

console.log(reversed);
