function age(ageInput){
    if (ageInput <13){
    let newAge= "child";
    
    return newAge;
    
    }

    if(ageInput >12 && ageInput <20){
    let teen = "Teenage";
    return teen;
    }

    
    if(ageInput > 18){
    let adult = "Adult";
    return adult;
    }

    
}
    console.log(age(12));
    console.log(age(14));
    console.log(age(25));
