

const prompt = require("prompt-sync")();

let distance = Number(prompt("Enter distance to drive (miles): "));
let mpg = Number(prompt("Enter fuel efficiency (miles per gallon): "));
let pricePerGallon = Number(prompt("Enter price per gallon: "));

let gallonsNeeded = distance / mpg;
let cost = gallonsNeeded * pricePerGallon;

console.log("Cost of the trip: $" + cost);