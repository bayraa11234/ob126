

// class Person {
//     constructor(){
//         this.legs = 2;
//         this.ears = 2;
//         this.eyes = 2;
//         this.name = "Person"
//     }
// }
// const person = new Person;
// console.log(person);

// class Student extends Person{
//     constructor(){
//         super();
//         this.age = 18,22;
//         this.name = "Student";
//     }
// }
// const student = new Student();
// console.log(student);

class Student{
    constructor(name, birthYear, weight, height){
        this.name = name;
        this.birthYear = birthYear;
        this.weight = weight;
        this.height = height;
    }
    getBMI(){
        return this.weight / this.height ** 2;

    }
    getAge(){
        return new Date().getFullYear - this.birthYear;
    }
}
const generateNumber = (min, max) => {
    return Math.round(Math.random() * (max - min )) + min;
};

const thisYear = new Date().getFullYear();
const students = [];

for (let i = 1; i <= 20; i++){
    const student = new Student(
        'Student ' + i,
        generateNumber(1970, thisYear),
        generateNumber(40, 120),
        generateNumber(155, 190)
    );
    students.push(student);
}
let averageBMI;
let averageAge;
let studentWithMaxBMI;
let studentWithMinBMI;
let youngest;
let oldest;

console.log(students);

let avaregeBMI =[];
let total = 0;
for( let student of students){
    console.log(`Name : ${student.name}, Age : ${2022  -student.birthYear}`);

    let bmi = student.weight/((student.height/100)**2);
    // avaregeBMI.push(Math.floor(bmi));
    console.log(Math.max(avaregeBMI));
    console.log(bmi);
    total+=bmi;
    // console.log(student.height);
}console.log(`BMI dundaj : ${total/students.length}`);