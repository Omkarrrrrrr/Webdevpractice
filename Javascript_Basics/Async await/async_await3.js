async function f() {
    console.log(1);
    await Promise.resolve();
    console.log(2);
}

console.log(0);
f();
console.log(3);


/* 
GLOBAL CODE
-----------
console.log(0)  → 0
f() starts
  console.log(1) → 1
  await → pause f
console.log(3)  → 3

MICROTASK
---------
resume f()
console.log(2)  → 2
*/