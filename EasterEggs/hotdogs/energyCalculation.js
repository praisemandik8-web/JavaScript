
const prompt = require("prompt-sync")();

let mass = Number(prompt("Enter amount of water (kg): "));
let initialTemp = Number(prompt("Enter initial temperature: "));
let finalTemp = Number(prompt("Enter final temperature: "));

let Q = mass * (finalTemp - initialTemp) * 4184;

console.log("Energy required: " + Q + " Joules");