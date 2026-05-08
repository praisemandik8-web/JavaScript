
const prompt = require("prompt-sync")();

let s = Number(prompt("Enter the side length of the hexagon: "));

let area = (3 * Math.sqrt(3) / 2) * s * s;

console.log("Area of the hexagon is: " + area);