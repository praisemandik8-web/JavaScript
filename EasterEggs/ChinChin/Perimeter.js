const prompt = require("prompt-sync")();

const edgeOne = Number(prompt("Enter the first edge: "));
const edgeTwo = Number(prompt("Enter the second edge: "));

if(edgeOne == edgeTwo){
console.log("Input is invalid")
}
else{
let result = edgeOne * edgeTwo
console.log(`Perimeter = ${result}`)
}
