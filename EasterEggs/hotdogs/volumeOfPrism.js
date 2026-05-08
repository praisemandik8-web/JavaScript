
const prompt = require("prompt-sync")();

let side = Number(prompt("Enter the length of the equilateral triangle side: "));
let prismLength = Number(prompt("Enter the length of the prism: "));

let area = (Math.sqrt(3) / 4) * side * side;
let volume = area * prismLength;

console.log("Area of triangle: " + area);
console.log("Volume of triangular prism: " + volume);