function calculator() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let operator = prompt("Enter operator (+, -, *, /):");

    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            // Handle division by zero
            if (num2 === 0) {
                result = "Error! Division by zero.";
            } else {
                result = num1 / num2;
            }
            break;
        default:
            result = "Invalid operator! Please use +, -, *, or /.";
            break;
    }

    // Display the result
    console.log("Result: " + result);
}

// Call the function to start the calculator
calculator();
