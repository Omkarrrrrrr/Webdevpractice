function* gen(){
    console.log("Inside Generator");
    const x = yield 10;
    const y = x + 30;
    yield y;
}

const it = gen();
console.log(it.next());
console.log(it.next(20));
console.log(it.next());

////////////////////////
function* gen(){
    console.log("Inside Generator");
    const x = yield 10;
    return 88;                                /// here generator gots terminated , further code is unreachable
    const y = x + 30;
    yield y;
}

const it2 = gen();
console.log(it.next());
console.log(it.next(20));
console.log(it.next());
console.log(it.next());
