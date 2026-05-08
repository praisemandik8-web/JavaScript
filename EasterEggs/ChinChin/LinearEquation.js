const prompt = require("prompt-sync")();

const a = Number(prompt(" Enter A: "));
const b = Number(prompt(" Enter B: ")); 
const c = Number(prompt(" Enter C: "));

if(a == 0){
console.log("No solution");
}  
else{
let x = (c - b)/ a

console.log(`Answer = ${x}`);

}
