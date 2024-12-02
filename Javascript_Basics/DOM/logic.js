// console.log("HEY");
// alert("I am a web developer");

// console.log(document.body);
// console.dir(document.body);


// // selecting with id name
// let heading = document.getElementById("header");
// console.dir(heading);

// // selecting with class  name
// let para = document.getElementsByClassName("para");
// console.dir(para);

// // selecting with tag name
// let tag = document.getElementsByTagName("p");
// console.dir(p);

let element = document.querySelector("p"); //select the first <p> element
console.dir(element);  /// this will return first element

let allEl = document.querySelector("p"); // selects all <p> element
console.dir(allEl); // Logs NodeList of <p> elements