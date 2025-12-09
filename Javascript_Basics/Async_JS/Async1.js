function createTimer(time,timerID){
    console.log("Creating a new timer with ID " ,timerID);
    setTimeout(()=> {
        console.log(`timer with id ${timerID} is done`);
    },time);
    console.log("Successfully created a new timer with id",timerID);
}
console.log("Starting the code");
createTimer(2000,1);
createTimer(0,1);
console.log("Starting a loop");
for(let i = 0; i < 1000000000; i++){
    // something is running
}
console.log("Loop is done");
console.log("Last time of code done");