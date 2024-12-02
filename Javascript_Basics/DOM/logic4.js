// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let para = document.querySelector("p");
// // console.log(para.getAttribute("class"));

// console.log(para.setAttribute("class","newClass"));

// let div = document.querySelector("div");
// div.style.backgroundColor("green");


let newBtn = document.createElement("button");
newBtn.innerText="click me!";
console.log(newBtn);

let div = document.querySelector("div");
div.append(newBtn);

// same will be done for append prepend before and after
// for removing

let para = document.querySelector("p");
para.remove();