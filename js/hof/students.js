// 1. Use an array to store student information. Each student will be represented as an object with properties such as name, age, and an array of grades.
const ff7Students = [
    {
        name: 'Cloud Strife',
        age: 22,
        classes: [{name: 'Materia', grades: [80, 80, 70]}, {name: 'Combat', grades: [80, 90, 100]}, {name: 'Items', grades: [100, 100, 100]}
        ]
    },
    {
        name: 'Tifa Lockhart',
        age: 21,
        classes: [{name: 'Materia', grades: [60, 70, 50]}, {name: 'Combat', grades: [100, 90, 100]}, { name: 'Items',grades: [60, 50, 60]}
        ]
    },
    {
        name: 'Aerith Gainsborough',
        age: 23,
        classes: [{name: 'Materia', grades: [100, 100, 100]}, {name: 'Combat', grades: [60, 70, 80]}, { name: 'Items',grades: [80, 60, 70]}
        ]
    }
]

const average = array => (array.reduce((acc, current) => acc + current, 0)) / array.length;

// 2. Implement a function that calculates the GPA of a student given his or her name.
const averageByName = (studentsList, name) => {
    const student = studentsList.find(student => student.name === name);
    const averagePerClass = student.classes.map(element => average(element.grades));
    return average(averagePerClass);
}

// 3. Implement a function that returns the name of all students who have a GPA higher than a given value
const studentsAverageAbove = (studentsList, above) => {
    const students = studentsList.filter(student => averageByName(studentsList, student.name) > above);
    const studentsNames = students.map(student => student.name);
    return studentsNames;
}

// 4. Use an iterator to loop through the array of students and display the name and age of each student in the console.
const printNameAge = studentsList => {
    studentsList.forEach(student => console.log(`${student.name} is ${student.age} years old.`));
}

// 5. Use a higher order function to find the student with the highest GPA in a specific subject.
const topOfClass = (studentsList , className) => {
    const studentsAndGPA = studentsList.map(element => {
        const {name, classes} = element;
        const foundClass = classes.find(element => element.name == className);
        const gpa = average(foundClass.grades);
        return { name, gpa};
    });

    const bestStudent = studentsAndGPA.reduce((prev, next) => {
        console.log(prev.gpa, next.gpa)
        return prev.gpa > next.gpa ? prev : next;
    });

    console.log(studentsAndGPA);

    return bestStudent.name;
};

console.log(averageByName(ff7Students, 'Cloud Strife'));
console.log(averageByName(ff7Students, 'Tifa Lockhart'));
console.log(averageByName(ff7Students, 'Aerith Gainsborough'));
console.log(studentsAverageAbove(ff7Students, 75));
printNameAge(ff7Students);
console.log(topOfClass(ff7Students, 'Materia'));
