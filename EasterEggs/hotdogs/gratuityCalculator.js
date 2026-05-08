
const prompt = require("prompt-sync")();

let subtotal = Number(prompt("Enter subtotal: "));
let gratuityRate = Number(prompt("Enter gratuity rate (%): "));

let gratuity = subtotal * (gratuityRate / 100);
let total = subtotal + gratuity;

console.log("Gratuity: $" + gratuity);
console.log("Total: $" + total);