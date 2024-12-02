
//printing * 5 times
for(let i=1; i<=5; i++){
    console.log("*");
}

//printing sum of 1 to 10
let sum = 0;
for(let i=1;i<=10;i++){
    sum = sum +i;
    
}
console.log(sum);


// for loop using var and let
// Using var
for (var i = 1; i <= 5; i++) {
    console.log("Using var:", i); // Prints 1, 2, 3, 4, 5
}
console.log("Using var, i outside loop:", i); // Prints 6 because 'var' has function scope

// Using let
for (let j = 1; j <= 5; j++) {
    console.log("Using let:", j); // Prints 1, 2, 3, 4, 5
}
try {
    console.log("Using let, j outside loop:", j); // Error: j is not defined
} catch (e) {
    console.log("Error with let:", e.message); // Catch the ReferenceError
}

// while loop
let x = 1;

// Using while loop to print numbers from 1 to 5
while (x <= 5) {
    console.log("While Loop:", x);
    x++; // Increment the counter
}

// do while loop
let y = 1;

// Using do...while loop to print numbers from 1 to 5
do {
    console.log("Do While Loop:", y);
    y++; // Increment the counter
} while (y <= 5);


// for-of-loop

let str = "javascript";
for(let i of str){
    console.log(i);
}

let size = 0;
let str1 = "java";
for(let i of str){
    console.log(i);
    size++;    //updation is necessary to get updated size
}

console.log("String size" , size);


// for of loop

let str2 = "Apnabazar";
for(let i of str){
    console.log(i);
}


// for-in-loop
