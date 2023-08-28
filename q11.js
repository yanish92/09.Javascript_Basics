// 11. Write a for...in loop that iterates over the properties of an object and logs each property name and value.

const person = {
    name: "Ahmeed",
    age: 30,
    occupation: "Engineer"
  };
  
  for (const key in person) {
    console.log(`Property: ${key}, Value: ${person[key]}`);
  }
  