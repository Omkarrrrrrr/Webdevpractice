
/* Closure of function -- A closure gives you access to an outer function’s variables from an 
inner function even after the outer function has finished executing.*/

/*uses: 
Data privacy / encapsulation

Persistent state in functions

Creating function factories or custom logic

Useful in callbacks, event handlers, and setTimeout/setInterval*/

//ex1

function outerFunction(){
    let outervar = "I am from outer scope";

    function innerFunction(){
        console.log(outervar);
    }

    return innerFunction; // return reference to inner function
}

const res = outerFunction(); // Calling outerFunction to get innerFunction
res(); // Calling the returned inner function


//ex2
function calculateTax() {
    return function(income) {
        if (income <= 1000000) {
            return "Your income is less than or equal to 10 lakh, so you don't have to pay tax.";
        } else if (income > 1000000 && income <= 1200000) {
            return "Tax to be paid is ₹" + (income * 0.1); // 10% tax
        } else if (income > 1200000 && income <= 1500000) {
            return "Tax to be paid is ₹" + (income * 0.2); // 20% tax
        } else {
            return "Tax to be paid is ₹" + (income * 0.3); // 30% tax
        }
    };
}

// Create the tax calculator using closure
const taxCalculator = calculateTax();

// Test with various incomes
console.log(taxCalculator(900000));    // No tax
console.log(taxCalculator(1100000)); 

//ex3

function createCounter(){
    let count = 0;

    return function(){
        count++ ;
        console.log("Count is: " + count);
    };
}

const counter1 = createCounter();
counter1();
counter1();
counter1();

const counter2 = createCounter();     ///this is a seperate state
counter2();
