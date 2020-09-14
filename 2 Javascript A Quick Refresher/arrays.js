const hobbies = ['Sports', 'Cooking', 1]

for(let hobby of hobbies) {
  console.log(hobby);
}

hobbies.map((hobby, index) => console.log(`${index + 1}: ${hobby}`))

hobbies.push('programming')
console.log(hobbies);