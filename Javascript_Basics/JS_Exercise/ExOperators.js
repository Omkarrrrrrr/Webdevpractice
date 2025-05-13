//Q1. Explain the role of operators in JavaScript. Why are they essential in programming?
/* Operators in JavaScript are symbols or keywords that perform operations on values or variables. They are fundamental to writing logic in code and allow developers to manipulate data, 
compare values, perform arithmetic, assign values, and control flow.
They are essential because:
They enable decision-making (e.g., using comparison and logical operators in if conditions).
They are used to perform calculations and manipulate values.
They help in assigning and updating values efficiently.
They make the code dynamic, interactive, and logical.
Without operators, a programming language would lack the capability to process data and make decisions.

Types of Operators:
Arithmetic Operators
Perform mathematical operations
+, -, *, /, %, ++, --

Assignment Operators
Assign values to variables
=, +=, -=, *=, /=

Comparison Operators
Compare two values
==, ===, !=, !==, >, <, >=, <=

Logical Operators
Combine or invert boolean values
&&, ||, !

Bitwise Operators
Perform bit-level operations
&, |, ^, ~, <<, >>, >>>

String Operators
Concatenate strings
+, +=

Ternary Operator
Short-hand for if-else
condition ? value1 : value2

Type Operators
Check or convert types
typeof, instanceof   */


//Q2. Describe the categorization of operators in JavaScript based on their functionality. Provide examples for each category
/* 1. Arithmetic Operators
Used to perform mathematical calculations.

Operator	     Description	             Example	                      Result
+	              Addition	                 5 + 2	                            7
-	             Subtraction	             5 - 2	                            3
*	            Multiplication	             5 * 2	                           10
/	               Division	                 10 / 2	                            5
%	          Modulus (remainder)	         5 % 2	                            1
++	              Increment	               let x=1; x++	                        2
--	              Decrement	               let x=2; x--	                        1

2. Assignment Operators
Used to assign or update the value of variables.

Operator	      Description	             Example	                       Result
=	                Assign	                  x = 10	                       x = 10
+=	           Add and assign	              x += 5	                       x = x + 5
-=	          Subtract and assign	          x -= 3	                       x = x - 3
*=	          Multiply and assign	          x *= 2	                       x = x * 2
/=	           Divide and assign	          x /= 2	                       x = x / 2

3. Comparison Operators
Used to compare two values.

Operator	         Description	          Example	                         Result
==	          Equal to (type-converting)	  5 == '5'	                         true
===      	Strict equal (no conversion)	  5 === '5'	                         false
!=	         Not equal (type-converting)	  5 != '5'	                         false
!==	              Strict not equal	          5 !== '5'	                         true
>	                Greater than	           5 > 3	                         true
<	                  Less than	               3 < 5	                         true
>=	            Greater than or equal to	   5 >= 5	                         true
<=	           Less than or equal to	       4 <= 3	                         false

4. Logical Operators
Used to combine or negate Boolean values.

Operator	          Description	           Example	                         Result
&&	                 Logical AND	        true && false	                     false
||                 	 Logical OR             true || false                        true
!	                 Logical NOT	           !true	                         false

5. String Operators
Used to concatenate strings.

Operator	         Description	           Example	                        Result
+	                Concatenation	           'Hello ' + 'World'	        'Hello World'
+=	                Append string	            str += '!'	                 str = str + '!'

6. Ternary Operator
Short form of if-else statements.
let age = 20;
let result = (age >= 18) ? "Adult" : "Minor";
// Output: "Adult"

7. Type Operators
Used to identify or check the type of a variable.

Operator	          Description	              Example	                       Result
typeof	         Returns type of operand	    typeof 123	                      "number"
instanceof	     Checks object type	arr         instanceof Array	               true

8. Bitwise Operators
Operate on binary representations.

Operator	             Description	           Example	                         Result
&	                           AND	                5 & 1	                            1
^	                           XOR	                5 ^ 1	                            4
~	                           NOT	                 ~5	                               -6
<<	                       Left shift	           5 << 1	                           10
>>	                       Right shift	           5 >> 1	                            2


//Q3. Differentiate between unary, binary, and ternary operators in JavaScript. Give examples of each.

/*Operator Type	           Operands	               Description	                     Example
Unary	                       1	         Works with a single operand	         ++x, typeof x
Binary	                       2	           Works with two operands	             x + y, x == y
Ternary                        3	          Works with three operands	             condition ? val1 : val2 */


//Q4. Discuss the precedence and associativity of operators in JavaScript. Why is understanding these concepts important?
/*
Operator precedence determines the order in which operators are evaluated in an expression. 
Operators with higher precedence are evaluated before those with lower precedence.

ex. let result = 10 + 5 * 2;  
    result = 10 + (5 * 2) = 20

Associativity defines the direction in which operators of the same precedence are evaluated. It can be:

Left-to-right (left-associative)
Most operators like +, -, *, /, etc.

Right-to-left (right-associative)
Operators like assignment (=), exponentiation (**), etc.

ex1) let x = 10 - 5 - 2;  
     (10 - 5) - 2 = 3 
 
ex2) let a = b = c = 10;  
     c = 10, b = 10, a = 10   

/*These concepts are imp cuz:
Correct Evaluation: Helps us predict how complex expressions are evaluated.

Avoids Bugs: Prevents logic errors in code that can be hard to debug.

Improves Readability: Makes expressions easier to read and understand.

Efficient Code Writing: Allows writing shorter, optimized code without unnecessary parentheses.*/



//Q5. Write a JavaScript program that calculates the simple interest using the formula Simple interest = (principal * rate * time) / 100.

let SI;
let principal = 45000;
let rate = 0.8;
let time = 3

SI = (principal * rate * time) / 100;
console.log("Simple interest is : " + SI);


//Q6. Write a Javascript program to calculate the Body Mass Index (BMI) using the formula BMI = weight (kg)/ height * height.

let BMI;
let weight = 105;
let height = 180;

// Converting height to meters
height = height / 100;

BMI = weight / (height * height);
console.log("BMI is: " + BMI);

//Q7. Write a program in JavaScript to calculate the area of a circle given its radius value of 10. Use appropriate arithmetic operators.


let radius = 10;
let area;

area = Math.PI * radius * radius;

console.log("Area of the circle is: " + area);
