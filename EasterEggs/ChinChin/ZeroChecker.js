const prompt = require("prompt-sync")();

const m = Number(prompt("Enter M: "));
const n = Number(prompt(" Enter N: "));

if(n == 0){
console.log("0");
}
else{
let quotient = m / n;
console.log(quotient);
}
