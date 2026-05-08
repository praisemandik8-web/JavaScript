
const prompt = require("prompt-sync")();

let meters = Number(prompt("Enter distance in meters: "));

let feet = meters * 3.2786;

console.log(meters + " meters is equal to " + feet + " feet");