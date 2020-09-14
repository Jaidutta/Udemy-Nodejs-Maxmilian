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

const printName = personData => {
  console.log(person.name);
}

console.log(printName(person))

// destructuring

const printPersonName = ({name, age}) => {
  console.log(`The name of the person is ${name} and the age of the person is ${age}`);
}

console.log(printPersonName(person));

const {name, age} = person

console.log(name, age);

// array destructuring
const hobbies = ['Sports', 'Cooking']
const [hobby1, hobby2] = hobbies
console.log(hobby1, hobby2);

