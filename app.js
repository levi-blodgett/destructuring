// Destructuring, easy way to assign variables and extract variables froma arrays and objects

// Destructuring Assignment

let a, b;
[a, b] = [100, 200];
// Rest pattern
[a, b, c, ...rest] = [100, 200, 300, 400, 500];

({ a, b } = { a:100, b: 200, c: 300, d: 400, e: 500 });
// rest pattern again
({ a, b, ...rest } = { a:100, b: 200, c: 300, d: 400, e: 500 });

// Array Destructuring
// const people = ['John', 'Beth', 'Mike'];

// const [person1, person2, person3] = people;

// console.log(person1, person2, person3);

// Parse array returned from function
function getPeople() {
  return ['John', 'Beth', 'Mike'];
}

let person1, person2, person3;
[person1, person2, person3] = getPeople();

// console.log(person1, person2, person3);

// Object Destructuring

const person = {
  name: 'John',
  age: 32,
  city: 'Miami',
  gender: 'Male',
  sayHello: function() {
    console.log('Hello');
  }
}

// Old ES5 way
// const name = person.name,
//       age = person.age,
//       city = person.city,
//       gender = person.gender;

// New ES6 Destructuring
const {name, age, city, gender, sayHello} = person;

console.log(name, age, city, gender);

sayHello();