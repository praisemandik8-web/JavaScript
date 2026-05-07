const prompt = require("prompt-sync")();

let age = prompt("what is your age? ");

if(!age){
        console.log("login")
}
else{
        console.log("invalid age")
}
