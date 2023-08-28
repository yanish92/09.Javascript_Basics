// 15. Explain the differences between regular functions and arrow functions in terms of scope, this binding, and their use as methods.

const person = {
    name: "Yanish",
  
    regularMethod: function() {
      console.log(`Hello, I'm ${this.name}`);
    },
  
    arrowMethod: () => {
      console.log(`Hello, I'm ${this.name}`);
    }
};

person.regularMethod(); 
person.arrowMethod(); 

const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2); 

const dynamicMethod = person.regularMethod.bind({ name: "Hyder" });
dynamicMethod(); 
