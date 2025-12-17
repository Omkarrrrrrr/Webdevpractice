//Below code is declarative code

function* myGenerator(){
    console.log("Inside generator");     
    yield 100;                                     //“yield is a reserved keyword and can only be used inside generator functions.
                                                   // Generator functions must be declared using function*.Without the *, JavaScript throws a syntax error.”
    console.log("Line 4");
    yield 99;
    console.log("Line 6");
    yield 87;
    console.log("Line 8");
    yield -1;
    console.log("Line 10");
}

const i = myGenerator();                     //wont run immediately when this function is called
console.log(i.next());
console.log("Out");
console.log(i.next());
console.log("Out");
console.log(i.next());
console.log("Out");
console.log(i.next());
console.log("Out");
console.log(i.next());
console.log("Out");
console.log(i.next());
console.log("Out");
console.log(i.next());
console.log("Out");