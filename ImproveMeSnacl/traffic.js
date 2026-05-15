const prompt = require("prompt-sync")();
function trafficLight(color){
    color = prompt("Enter traffic light color ")
    if(color === "red"){
    return "chairman, Stop!"
    }
    else if(color === "yellow"){
    return "Get ready"
    }
    else if(color === "green"){
    return "Go jorr!"
    }
    else{
    return "Error!"
    }


}

console.log(trafficLight());

