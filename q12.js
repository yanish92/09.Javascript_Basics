// 12. Explain the use of the break and continue statements within loops. Provide scenarios where each might be used.
// Break Statement:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let found = false;

for (const number of numbers) {
  if (number === 5) {
    found = true;
    break;
  }
}

if (found) {
  console.log("Number found!");
} else {
  console.log("Number not found.");
}

// Continue Statement:
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const number2 of numbers1) {
  if (number2 % 2 === 0) {
    continue; // Skip even numbers
  }
  console.log(number2);
}
