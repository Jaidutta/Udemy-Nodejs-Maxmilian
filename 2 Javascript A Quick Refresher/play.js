const name = 'Joy'
let age = 35
const hasHobbies = true

age = 40

/*
function summerizeUser(userName, userAge, userHobby) {
  return 'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHobby
}
*/

// arrow function
summerizeUser = (userName, userAge, userHobby) => {
  return 'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHobby
}
console.log(summerizeUser(name, age, hasHobbies));

// arrow function with 2 arguments
const add = (a, b) => a + b

console.log(add(3,2));

// arrow function with 1 argument
const addOne = a => a + 1

console.log(addOne(5));

// arrow function with no argument
const addRandom = () => 1 + 2
console.log(addRandom());