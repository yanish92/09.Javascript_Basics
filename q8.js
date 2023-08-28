// 8. Write a loop that iterates over an array of numbers and logs whether each number is even or odd, using a ternary operator.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const number of numbers) {
  const isEven = number % 2 === 0;
  console.log(`${number} is ${isEven ? 'even' : 'odd'}`);
}
