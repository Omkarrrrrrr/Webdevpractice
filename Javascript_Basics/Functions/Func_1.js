// using below logic we can define our function
function greetingToEveryone(){
    console.log("My logic line 1");
    console.log("My logic line 2");
    console.log("My logic line 3");
    console.log("My logic line 4");
}


//calling a function

greetingToEveryone();

console.log(Math.sqrt(144));

//defining function
function isEvenOrOdd(x){          // x is placeholder here

    if(x % 2 == 0){
        console.log("Even");
    }
    else{
        console.log("Odd");
    }

}

isEvenOrOdd(97);                 // 97 is argument

function multiply(a,b){
   console.log(a*b) ;
}

multiply(3,6);