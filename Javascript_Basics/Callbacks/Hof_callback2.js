const numbers = [1, 2, 3, 4];

const squared = numbers.map(function(n) {
    return n * n;
});

console.log(squared);

//
const numbers2 = [10, 5, 25, 2, 50];

const filtered = numbers2.filter(function(n) {
    return n > 10;
});

console.log(filtered);

const numbers3 = [1, 2, 3, 4];

//
const sum = numbers3.reduce(function(total, current) {
    return total + current;
}, 5);

console.log(sum);

//function returning another function
function greet(message) {
    return function(name) {
        console.log(message + ", " + name);
    };
}

const sayHello = greet("Hello");
sayHello("Omkar");

//Higher order function with multiple callbacks
function calculate(a, b, operation) {
    return operation(a, b);
}

function add(x, y) { return x + y; }
function subtract(x, y) { return x - y; }
function multiply(x, y) { return x * y; }

console.log(calculate(10, 5, add));     
console.log(calculate(10, 5, subtract)); 
console.log(calculate(10, 5, multiply));