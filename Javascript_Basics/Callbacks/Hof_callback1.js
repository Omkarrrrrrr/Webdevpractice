// Synchronous callback 
function h(x,fn){
    // here h is higher order function
    // fn is callback
    console.log(x*x);
    fn();
}

h(10,function(){
    console.log("Callback done");
})

//Asynchronous callback

console.log("Start")
const set = setTimeout(function f(){
    console.log("timer done");
},5000);

//clearTimeout(set);
console.log("timer stopped")
//for(let i=0; i < 1000000000000; i++); // here this for loop(native feature is used as blocking code for setTimeut function)