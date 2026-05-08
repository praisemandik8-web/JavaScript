
const prompt = require("prompt-sync")();

let num = Number(prompt("Enter an integer: "));

if (num % 2 === 0) {
    console.log(num + " is divisible by 2");
} else {
    console.log(num + " is not divisible by 2");
}

if (num % 3 === 0) {
    console.log(num + " is divisible by 3");
} else {
    console.log(num + " is not divisible by 3");
}

if (num % 5 === 0) {
    console.log(num + " is divisible by 5");
} else {
    console.log(num + " is not divisible by 5");
}

if (num % 7 === 0) {
    console.log(num + " is divisible by 7");
} else {
    console.log(num + " is not divisible by 7");
}