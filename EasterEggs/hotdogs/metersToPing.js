
const prompt = require("prompt-sync")();

let squareMeters = Number(prompt("Enter area in square meters: "));

let ping = squareMeters * 0.3025;

console.log(squareMeters + " square meters is equal to " + ping + " ping");