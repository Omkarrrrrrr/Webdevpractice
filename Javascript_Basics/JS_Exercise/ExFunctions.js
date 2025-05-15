/*Q1. Create an arrow function called square that takes a number as an argument and returns its square. 
Use the arrow function to calculate the square of a given number and display the result.*/

const square = num => num * num;
let num = 5;
console.log(square(num));

/*Q2. Create a JavaScript function called generateGreeting that takes a name as an argument and returns a
personalized greeting message. Use this function to greet three different people.*/


function generateGreeting(name){
    return name + " Welcome to our function!";
}

let greet1 = generateGreeting("Omkar");
console.log(greet1);

let greet2 = generateGreeting("Max");
console.log(greet1);

let greet3 = generateGreeting("Jack");
console.log(greet1);


/* Create an IIFE (Immediately Invoked Function Expression) that calculates the square of a number and
immediately displays the result.*/

(function (num){
    console.log("The square of " +num+ " is " +num * num );
})(35);


/*Q4. Write a JavaScript function called calculateTax that takes an income as an argument and returns the
amount of tax to be paid. Use a closure to handle different tax rates based on income ranges. Test the
function with various incomes. */

function calculateTax(){
    return function(income){
        if (income <= 1000000) {
            return "Your income is less than or equal to 10 lakh, so you don't have to pay tax.";
        } else if (income > 1000000 && income <= 1200000) {
            return "Tax to be paid is ₹" + (income * 0.1); 
        } else if (income > 1200000 && income <= 1500000) {
            return "Tax to be paid is ₹" + (income * 0.2); 
        } else {
            return "Tax to be paid is ₹" + (income * 0.3); 
        }
    };
    
}

const taxCalculator = calculateTax();

console.log(taxCalculator(90000));
console.log(taxCalculator(1500000));

/*Q5. Write a JavaScript function called factorial that calculates the factorial of a non-negative integer using
recursion. Test the function with different inputs.*/

function fact(num1) {
    if (num1 < 0) {
        return "Factorial of negative number can't be counted";
    }
    if (num1 === 0 || num1 === 1) {
        return 1;  // Base case
    }
    return num1 * fact(num1 - 1);  // Recursive call
    
}
const num1 = 4;
const result = fact(num1);

console.log("The factorial of number " + num1 + " is " + result);


/* 6) Write a JavaScript function called curry that takes a function as an argument and returns a curried
version of that function. The curried function should accept arguments one at a time and return a new
function until all arguments are provided. Then, it should execute the original function with all arguments.
Test the curry function with a function that adds two numbers.*/

function curry(func) {
  return function(a) {
    return function(b) {
      return func(a, b);
    };
  };
}

function add(x, y) {
  return x + y;
}

const curriedAdd = curry(add);
const result1 = curriedAdd(2)(3); 
console.log(result1); 






