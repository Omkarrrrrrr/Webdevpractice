function printMultiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(number + " x " + i + " = " + (number * i));
    }
}

// Get user input for the number
let number = parseInt(prompt("Enter a number to print its multiplication table: "));

// Call the function to print the multiplication table
printMultiplicationTable(number);
