
const prompt = require("prompt-sync")();

let totalSeconds = Number(prompt("Enter number of seconds: "));

let hours = Math.floor(totalSeconds / 3600);
let remainingSeconds = totalSeconds % 3600;

let minutes = Math.floor(remainingSeconds / 60);
let seconds = remainingSeconds % 60;

console.log(totalSeconds + " seconds = " + hours + " hour(s), " + minutes + " minute(s), " + seconds + " second(s)");