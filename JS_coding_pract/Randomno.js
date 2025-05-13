// let randomNo = Math.random();
// console.log("random no b/w 0 to 1: " + randomNo);

// geanerating random number between 2 integeres

// let randomNUmber = getRandomNumber(1,100);
// console.log("Random interger (1 to 100): " , randomNUmber);

// function getRandomNumber(min,max){
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }


function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

// Generate a random float between 5 and 10
let randomFloat = getRandomFloat(5, 10);
console.log("Random Float (5 to 10):", randomFloat);
