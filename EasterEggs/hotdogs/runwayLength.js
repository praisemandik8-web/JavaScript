
const prompt = require("prompt-sync")();

let v = Number(prompt("Enter takeoff speed (v in m/s): "));
let a = Number(prompt("Enter acceleration (a in m/s^2): "));

let length = (v * v) / (2 * a);

console.log("Minimum runway length needed: " + length + " meters");