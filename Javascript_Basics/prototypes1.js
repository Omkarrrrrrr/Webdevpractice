// CALL FUNCTION (PROTOTYPES)
//ex 1
// use 1 -  letting us use one function for many objects

function showAge(){
    return `i am ${this.age} years old`;
}
const person1 = {age:25};
const person2 = {age:34};
console.log(showAge.call(person1)); 
console.log(showAge.call(person2)); 


//ex 2
// use 2 - calling super constructor

function animal(name){
 this.name = name; 
}

function Dog(name,breed){
    animal.call(this,name);
    this.breed = breed;
}

const d = new Dog("Ronny","Rotweiler");
console.log(d.name , d.breed);


//ex 3
//use 3-Converting NodeList to array using map
const texts = Array.prototype.map.call(document.querySelectorAll('p'), p => p.textContent);
console.log(texts);

//document.querySelectorAll('p'), p => p.textContent      -------> gives all <p. tag values from the document