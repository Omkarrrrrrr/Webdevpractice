function isEvenOrODd(){
    let x;
    if(x % 2 == 0){
        return "even";
    }
    else{
        return "odd";
    }
}

const ans = isEvenOrODd(4);
console.log(ans);

function add(x,y){
    return x+y;

}
console.log(add(20,2));

const ans1 = isEvenOrODd(4);
console.log(ans);

function add(x,y=5){
    return x+y;

}
console.log(add(20));