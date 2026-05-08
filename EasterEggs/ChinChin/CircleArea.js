const input = require("prompt-sync")();

const radius = Number(input("Enter  radius of cylinder: "));

const height = Number(input("Enter height of cylinder: "))

let area = ( 2 * (Math.PI) * radius ) * (radius + height);

console.log(area.toFixed(2));
