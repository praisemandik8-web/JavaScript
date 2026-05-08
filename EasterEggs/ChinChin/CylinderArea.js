const prompt = require("prompt-sync")();

const radius = Number(prompt("Enter the radius of cylinder: "));

const height = Number(prompt("Enter the height of cylinder: "))

let area = ( 2 * (Math.PI) * radius ) * (radius + height);

console.log(`Area = ${area.toFixed(2)}`);
