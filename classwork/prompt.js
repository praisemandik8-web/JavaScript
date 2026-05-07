const prompt = require("prompt-sync")();

let age = prompt("What is your age?")

if(age > 0 && age < 12){
  console.log("you are child.");
}else if(age > 12 &&  age <18){
 console.log("You are a Teenager!")
}else if(age >= 18){
 console.log("You're an Adult!?")
}else{
 console.log("invalid age")
}

