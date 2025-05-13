// function findLargest(num1, num2, num3) {
//     if (num1 >= num2 && num1 >= num3) {
//         return num1; // num1 is the largest
//     } else if (num2 >= num1 && num2 >= num3) {
//         return num2; // num2 is the largest
//     } else {
//         return num3; // num3 is the largest
//     }
// }

// // Test the function
// let num1 = 10, num2 = 25, num3 = 15;
// let largest = findLargest(num1, num2, num3);
// console.log("The largest number is: " + largest);

let num1 = 10, num2 = 25, num3 = 15;
let largest = Math.max(num1, num2, num3);
console.log("The largest number is: " + largest);

