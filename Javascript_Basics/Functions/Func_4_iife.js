// An IIFE (iffy):Immediately Invoked Function Expression
//It is a function that runs as soon as it is defined.
//No need to call seperately


//ex1 
(function func(){
    console.log("This runs immediately");
})();


//ex2
(function(num) {
    console.log("The square of", num, "is", num * num);
})(5);


//ex3
theName = (function(name){
   return "The name is: " + name;
})("omkar");

console.log(theName);