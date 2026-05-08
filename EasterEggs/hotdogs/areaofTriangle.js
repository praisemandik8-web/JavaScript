
const prompt = require("prompt-sync")();

let x1 = Number(prompt("Enter x1: "));
let y1 = Number(prompt("Enter y1: "));
let x2 = Number(prompt("Enter x2: "));
let y2 = Number(prompt("Enter y2: "));
let x3 = Number(prompt("Enter x3: "));
let y3 = Number(prompt("Enter y3: "));

let side1 = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
let side2 = Math.sqrt(Math.pow(x3 - x2, 2) + Math.pow(y3 - y2, 2));
let side3 = Math.sqrt(Math.pow(x3 - x1, 2) + Math.pow(y3 - y1, 2));

let s = (side1 + side2 + side3) / 2;

let area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

console.log("Area of the triangle is: " + area);