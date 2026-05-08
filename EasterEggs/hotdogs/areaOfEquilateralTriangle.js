const prompt = require("prompt-sync")();
let side = Number(prompt("Enter side: "));
let area = (Math.sqrt(3) / 4) * side * side;
console.log("Area:", area);