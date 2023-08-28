// 10. Provide an example of using optional chaining within a loop to access a potentially missing property of an object.

const students = [
    { name: "Ali", grades: [90, 85, 95] },
    { name: "Farhan" }
];

for (const student of students) {
    const averageGrade = student.grades?.reduce((acc, grade) => acc + grade, 0) / (student.grades?.length || 1);
    console.log(`${student.name}'s average grade: ${averageGrade || "N/A"}`);
}
  