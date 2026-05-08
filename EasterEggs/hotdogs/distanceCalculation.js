
const prompt = require("prompt-sync")();

let u = Number(prompt("Enter initial velocity (u in m/s): "));
let t = Number(prompt("Enter time (t in seconds): "));
let a = Number(prompt("Enter acceleration (a in m/s^2): "));

let s = (u * t) + (0.5 * a * t * t);

console.log("Distance covered: " + s + " meters");