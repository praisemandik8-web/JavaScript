const prompt = require("prompt-sync")();
let r = Number(prompt("Radius: "));
let h = Number(prompt("Height: "));
let volume = Math.PI * r * r * h;
console.log("Volume:", volume);