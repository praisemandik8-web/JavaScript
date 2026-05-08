
const prompt = require("prompt-sync")();

let weightPounds = Number(prompt("Enter weight in pounds: "));
let heightInches = Number(prompt("Enter height in inches: "));

let weightKg = weightPounds * 0.45359237;
let heightMeters = heightInches * 0.0254;

let bmi = weightKg / (heightMeters * heightMeters);

console.log("Your BMI is: " + bmi);