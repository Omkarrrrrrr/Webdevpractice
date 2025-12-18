async function f(){
    return 10;
}
console.log(f());      // async function always returns a promise
//Even if you return a normal value, it becomes a resolved Promise



// throwing error == rejected promise
async function f(){
    throw "Error occured";
}
f().catch(err => console.log("Error"));
//equivalent to 
//return Promise.reject("Error occurred