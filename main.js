const grades = [
    { name: "Макар", score: 85 },
    { name: "Денис", score: 92 },
    { name: "Анна", score: 78 },
    { name: "Даша", score: 88 },
    { name: "Студент_X", score: 45 }
];

const calculateAverage = require("./calculateAverage");
const findTopStudent = require("./findTopStudent");
const filterFailed = require("./filterFailed");
const addLetterGrade = require("./addLetterGrade");

console.log("Средний балл:", calculateAverage(grades));
console.log("Лучший студент:", findTopStudent(grades));
console.log("Должники:", filterFailed(grades, 60));
console.log("Оценки:", addLetterGrade(grades));