function SameLastDigit(...numbers) {
    if (numbers.length < 2) {
      return false; // Need at least two numbers to compare
    }
  
    const lastDigits = [];
    for (let i = 0; i < numbers.length; i++) {
      lastDigits.push(Math.abs(numbers[i] % 10));
    }
  
    let areSame = true; // Assume all digits are the same
    for (let i = 1; i < lastDigits.length; i++) {
      if (lastDigits[i] !== lastDigits[0]) {
        areSame = false;
        break;
      }
    }
  
    return areSame; // Return the result
  }
  
  // Test cases
  console.log(SameLastDigit(27, 37, 47)); // true (last digit is 7)
  console.log(SameLastDigit(15, 25, 38)); // false
  console.log(SameLastDigit(12, 22));     // true (last digit is 2)
  console.log(SameLastDigit(7));          // false (only one number provided)
  