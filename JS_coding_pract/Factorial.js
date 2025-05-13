let number = 5;
console.log("the factorial of a number " + number + " is" + fact(number));

function fact(number){
    if(number == 0 || number == 1){
        return 1;
    }
    return number * fact(number - 1)
}