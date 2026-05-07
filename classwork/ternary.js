const prompt = require("prompt-sync")();
let age = prompt("What is your age?");

(age < 12)?console.log("I am a child"):console.log("I am an adult")
