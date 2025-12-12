const pr = new Promise ((res,rej) =>{
        console.log("Executer callback triggered by Promise Constructor");
        for(i = 0; i < 10000000; i++);
});

console.log("Created the promise object");
console.log(pr);


//
const pr2 = new Promise(function exec(res,rej){
    console.log("Executed callback triggered");
    setTimeout(()=>{
    const randomNumber = Math.floor(Math.random()*100);
    console.log(randomNumber);
    if(randomNumber % 2 === 0){
        res();
    } else{
        rej();
    }
    },5000);
    

});

console.log("Created the promise object");
console.log(pr2);