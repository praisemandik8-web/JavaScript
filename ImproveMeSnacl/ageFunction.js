function age(ageInput){
    if (ageInput <13){
    let newAge= "child";
    
    return newAge;
    
    }

    else if(ageInput >12 && ageInput <20){
    let teen = "Teenage";
    return teen;
    }

    
     else if(ageInput > 18){
    let adult = "Adult";
    return adult;
    }

    else{
    return "Invalid";
    }

    
}
    console.log(age(12));
    console.log(age(14));
    console.log(age(25));
