const prompt = require("prompt-sync")();
const pi = 3.142
let radius = +prompt("Enter radius")
let area = pi * (radius**2);
console.log("Area of circle is ", area)
