function animal(name){
 this.name = name; 
}

const dog = new animal("Lion")
console.log(dog);       // prints whole object - animal { name: 'Lion' }
console.log(dog.name);  // here dot is used to access the property