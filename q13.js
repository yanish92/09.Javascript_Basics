// 13. Write a function calculateTax that calculates and returns the tax amount based on a given income. Use a ternary operator to determine the tax rate.

function calculateTax(income) {
    const taxRate = income <= 50000 ? 0.1 : income <= 100000 ? 0.2 : 0.3;
    const taxAmount = income * taxRate;
    return taxAmount;
  }
  
  const income1 = 30000;
  const tax1 = calculateTax(income1);
  console.log(`Tax for ${income1}: $${tax1}`);
  
  const income2 = 75000;
  const tax2 = calculateTax(income2);
  console.log(`Tax for ${income2}: $${tax2}`);
  