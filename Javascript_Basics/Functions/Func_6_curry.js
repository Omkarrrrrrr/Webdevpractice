/*Currying is used in JavaScript to break down complex function calls into smaller, more manageable steps. 
It transforms a function with multiple arguments into a series of functions, each taking a single argument.

It converts a function with multiple parameters into a sequence of functions.
Each function takes a single argument and returns another function until all arguments are received.
Helps in functional programming by enabling function reusability and composition.*/


/* Advantages of Currying Function
It helps us to create a higher-order function
It reduces the chances of error in our function by dividing it into multiple smaller functions that can handle one responsibility.
It is very useful in building modular and reusable code
It helps us to avoid passing the same variable multiple times
It makes the code more readable */


/*Uses = 
-Partial Application: In the partial application we set some arguments in advance in the function and call it later with the remaining arguments.
- Higher-Order Functions: When one function takes the other functions as arguments (eg: map, filter, reduce) 
 in that case we can use the currying function to manage the arguments more effectively.
-Functional Programming: Where functions are treated as important and focus is on not changing data 
 and combining functions in those cases currying works perfectly.*/


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
const result = curriedAdd(2)(3); 
console.log(result);  
      