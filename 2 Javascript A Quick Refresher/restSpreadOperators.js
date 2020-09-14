// spread operator
const hobbies = ['Sports', 'Coding']
const copiedHobbies = hobbies.slice()
const anotherCopiedHobbies = [...hobbies]

const person = {
  name: 'Joy',
  age: 29,
  greet() {
    console.log(`My name is ${this.name} and I am ${this.age} years old`);
  }
}

const copiedPerson = {...person}

console.log(copiedPerson);

// Rest operator
/*
  const toArray = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3]
  }

  console.log(toArray(2, 3, 4));
*/

const toArray = (...args) => {
  return args
}

console.log(toArray(2, 3, 4));