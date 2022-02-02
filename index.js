let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'maths','english', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon'},
        results: {science: 93, maths: 95, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 79, art: 95},
    }
];

const averagePoints = (arr, subject) => {
    let result = 0;
    let matched = 0;
    for(let i of arr) {
        if(i.subjects.includes(subject)) {
            result += i.results[subject];
            matched++;
        }
    }
    return result / matched;
}

let result = averagePoints(students, "english");
console.log(result);


// const averagePoints = (arr, subject) => {
//     let result = 0;
//     let matchedCount =  0;
//     for(let student of arr) {
//         if(student.subjects.includes(subject)) {
//             result += student.results[subject];
//             matchedCount++;
//         }
//     }
//     return result / matchedCount;
// }
// let result = averagePoints(students, "english");
// console.log(result);