const prompt = require("prompt-sync")();
function greetUser(name){

name = prompt("Enter ya name chairman ");
greetings = "Hello ";
return greetings + name

}
console.log(greetUser());
