function someFunction(){
    return function(){
        return 10;
    }
}

function anotherFunction(f1){
    f1();
    console.log("called f1");
}

function hello(){
    console.log("Hello");
}

anotherFunction(hello);
