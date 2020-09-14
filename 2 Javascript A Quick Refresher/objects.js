const person = {
  name: 'Joy',
  age: 35,
  // 2 ways to restrict the scope to the object
  /*
   greet() {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
   }
  */
  
  greet: function() {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
   }
  
}

console.log(person.greet());