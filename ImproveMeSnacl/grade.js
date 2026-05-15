const prompt = require("prompt-sync")();
function grade(score){
    score = prompt("Enter score ");

    if(score >= 70){
    
    return "A";
    }
    else if(score >= 60 && score <= 69){
    
    return "B";
    }
    else if(score >= 50 && score <= 59){
    
    return "C";
    }
    else if(score >= 40 && score <= 49){
    
    return "D";
    }
    else if(score < 40){
    
    return "F";
    }
    else{
    
    return "Invalid score"
    
    }
}
console.log(grade());
