// Value is stored in the stack
const name = 'huy';
const age = 30;

// Reference is stored in the heap
const person = {
  name: 'huy',
  age: 40,
};

let newName = name;
newName = 'vuhuy';

let newPerson = person;
newPerson.name = 'vuhuy';

console.log(name, newName); // John, Jonathan
console.log(person, newPerson); // { name: 'Bradley', age: 40 }, { name: 'Bradley', age: 40 }
