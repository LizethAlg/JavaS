/*
let a=10;
let b=5;
a+=1;
console.log(a);
a=a+b;
console.log("a=a+b:"+a);
a=11;
a+=b;
console.log("a+b :"+a);
//genera un array de 10  elementos
let a1=10;
let b1=5;
a+=1;
console.log(a);
a=a+b;
console.log("a=a+b:"+a);
a=11;
a+=b;
console.log("a+b :"+a);
//genera un array de 10  elementos
//nombre:"juan" nota:randomico entre 20-100
//mostrar la nota mayor, nemor y promedio

*/
// Generate an array of 10 elements with random grades for "juan"
let students = [];
for (let i = 0; i < 10; i++) {
    let grade = Math.floor(Math.random() * (100 - 20 + 1)) + 20; // Random grade between 20 and 100
    students.push({ nombre: "juan", nota: grade });
}

// Find the highest and lowest grades
let highestGrade = -Infinity;
let lowestGrade = Infinity;
let total = 0;
for (let i = 0; i < students.length; i++) {
    let grade = students[i].nota;
    if (grade > highestGrade) {
        highestGrade = grade;
    }
    if (grade < lowestGrade) {
        lowestGrade = grade;
    }
    total += grade;
}

// Calculate the average grade
let averageGrade = total / students.length;

// Display the results
console.log("Grades:", students);
console.log("Highest Grade:", highestGrade);
console.log("Lowest Grade:", lowestGrade);
console.log("Average Grade:", averageGrade);