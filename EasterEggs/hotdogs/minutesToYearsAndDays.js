
const prompt = require("prompt-sync")();

let minutes = Number(prompt("Enter the number of minutes: "));

let minutesPerDay = 60 * 24;
let minutesPerYear = minutesPerDay * 365;

let years = Math.floor(minutes / minutesPerYear);
let remainingDays = Math.floor((minutes % minutesPerYear) / minutesPerDay);

console.log(minutes + " minutes is approximately " + years + " years and " + remainingDays + " days");