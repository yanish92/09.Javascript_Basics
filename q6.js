// 6. Create an object named student with properties name, age, and grades. Add a method calculateAverage that calculates the average of the grades.
const student = {
    name: "yanish",
    age: 17,
    grades: [85, 90, 78, 95],
  
    calculateAverage: function() {
      const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
      const average = sum / this.grades.length;
      return average;
    }
  };
  
  console.log(student.name);
  console.log(student.age); 
  console.log(student.calculateAverage());