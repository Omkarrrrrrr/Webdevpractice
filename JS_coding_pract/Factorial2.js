let number = 6;
console.log("the factorial of a number" + number + " is " + fact(number));

function fact(number){
    if(number < 0){
        return "Fact is not defined for negative numbers"
    }

    let result = 1;
    for(let i=1; i <= number ; i++){
        result = result * i;
    }
    return result;
}