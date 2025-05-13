let number = 5;
if(isPrime(number)){
    console.log(number + "is prime");
}
else{
    console.log(number + "is not prime");
}


function isPrime(number){
    if(number <= 1){
        return false;
    }

    for(let i=2; i <= Math.sqrt(number); i++){
        if(number % i === 0){
            return false;
        }
    }
    return true;
}