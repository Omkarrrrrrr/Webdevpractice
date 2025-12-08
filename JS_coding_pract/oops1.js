//Encapsulation 
// Building data and methods that operate on that data within one unit
// Restricting direct access to some of object components

function Person(name, age) {
  let _age = age; // private variable

  this.name = name;

  this.getAge = function() {
    return _age;
  };

  this.setAge = function(newAge) {
    if (newAge > 0) _age = newAge;
    else console.log("Invalid age");
  };
}

const person1 = new Person("Omi", 22);
console.log(person1.name);     
console.log(person1.getAge()); 
person1.setAge(25);
console.log(person1.getAge()); 
