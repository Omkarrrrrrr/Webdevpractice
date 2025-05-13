/*  Q1. What are conditional statements? Explain conditional statements with syntax and examples.
    -   They are used to perform different action based on different conditions.
    -   they evaluate expressions  */
//1) if                        

        let age = 64;
        if(age >= 60){
           console.log("You are not eligible to attend this competition");
        }

//2) if else 

        let isodd = true;
        if(isodd){
            console.log("Yes its odd");
        }
        else{
            console.log("Its not odd")
        }

//3) if else-if else
        
        age = 67
        if(age < 18){
            console.log("you are a child")
        }
        else if(age >18 && age < 40){
            console.log("You are adult")
        }
        else{
             console.log("You are old")
        }

//4) switch 

let day = 3;
switch(day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Another day");
}

//5) Ternery operator

function isGreat() {
    return true;
  }
  
  isGreat() ? console.log("Yes") : console.log("No");

/* Q2. Write a program that grades students based on their marks^
If greater than 90 then A GradE
If between 70 and 90 then a B gradE
If between 50 and 70 then a C gradE
Below 50 then an F grade */

let marks = 78;

if(marks > 90){
    console.log("You get grade A");
}
else if(marks >= 70 && marks <= 90 ){
    console.log("You get grade B")
}
else if(marks >= 50 && marks <= 70 ){
    console.log("You get grade c")
}
else{
    "You get grade F"
}

//Q3. What are loops, and what do we need them? Explain different types of loops with their syntax and examples.
/* Loops are used to control repetitive execution of any bunch of code as the condition is provided
uses:
To avoid repetitive code.
To iterate over data like arrays or strings.
To automate repetitive tasks, like printing numbers, processing items, etc.*/

// 1) for loop example

let output = "";
for (let i = 1; i <= 10; i++) {
  output += i + " ";
}
console.log(output);

// 2) while loop                               //Condition is checked first, then the block is executed.
let i= 1;                                      //If the condition is false at the start, the loop doesn’t run at all.
while(i < 6){
    console.log(i * i);
    i++;
}

//3) do while loop                             //Block is executed first, then the condition is checked.
let j = 1;                                     //Always runs at least once, even if the condition is false initially.
do {
  console.log(j*j ); 
  j++;
} while (j < 6);               

//4)for.....of loop
console.log("Marks array")
let marksArr = [50,60,70,80];
for (let mark of marksArr) {
  console.log(mark);
}


/*Q4. Generate numbers between any 2 given numbers.
Output: 11, 12, 13, …., 25 */
//E
const num1 = 10;
const num2 = 25;

console.log("Numbers bw 10 to 25 including 25")
for(let i = num1+1; i <= num2; i++){
  console.log(i);
}

//Q5. Use the while loop to print numbers from 1 to 25 in ascending and descending order.

let a = 1;
console.log("This is in ascending order");
while(a <= 25){
  console.log(a);
  a++;
  
}

let b = 25;
console.log("This is in descending order");
while(b>=1){
  console.log(b);
  b--;
 
}