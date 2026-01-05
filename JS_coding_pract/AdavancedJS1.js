/* Problem 1

Create a Map in JavaScript and perform the following operations
1) Add key-value pairs to the Map
2) Check if a specific key exists
3) Retrieve the value associated with a given key
4) Iterate through all key-value pairs */

const map = new Map();
map.set("Name","Omkar");
map.set("Age",23);
map.set("City","Pune");

console.log(map.has("Age"));

const age = map.get("Age");
console.log(age);

for(const [key,value] of map){
    console.log(key,value);
}

/*Problem 2

Create a Map to store contact information (name, age, email, location) and implement a function to retrieve
contact details by name.*/

const map2 = new Map();
map2.set("Name","Omkar");
map2.set("age",25);
map2.set("email","ominalawade123@gmail.com");
map2.set("location","Pune");

function getContactDetails(map,name){
    if(map.has("Name") && map.get("Name") === name){
        return {
        Name : map.get("Name"),
        Age : map.get("age"),
        Email : map.get("email"),
        Location:map.get("location")
    };
    }
    return "contact not found";
}

console.log(getContactDetails(map2,"Omkar"));

/*Problem 3

You are given an array of numbers named myArray. Create a function that takes any number of arguments
and adds them to the existing array. Use the spread and rest operator.*/

const myArray = [10,23,45,56,76,78];

function addElements(...nums){
  return [...myArray,...nums];
}
const newArray = addElements(5,15,34,23);
console.log(newArray);

/*Problem 4

Create an object car with properties brand, model, and a method displayDetails that prints "Brand: [brand],
Model: [model]". Test the method using this keyword.*/

const car = {"Brand":"Tata",
    "Model":"Punch Adventure",
    
    displayDetails: function(){
    console.log( `Brand = ${this.Brand}`);
    console.log( `Model= ${this.Model}`);
}
};
car.displayDetails();

/*Problem 5

Create two objects person1 and person2 with properties name and age. Create a function “introduce” that
prints "Hello, I'm [name], and I'm [age] years old." Use the call method to make person2 introduce itself
using the introduce function.*/

const person1 = {"name": "Jack",
    "age" : 34,
};

const person2 = {"name": "Michael",
    "age" : 23,
};

function introduce() {
    console.log(`Hello, I'm ${this.name}, and I'm ${this.age} years old.`);
}

introduce.call(person1);
introduce.call(person2);
