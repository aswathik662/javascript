const students = [
    { name: "Alice", score: 95, subject: "Math" },
    { name: "Bob", score: 67, subject: "Science" },
    { name: "Charlie", score: 82, subject: "English" },
    { name: "David", score: 74, subject: "History" },
    { name: "Eve", score: 58, subject: "Art" },
    { name: "Frank", score: 89, subject: "Physics" },
    { name: "Grace", score: 91, subject: "Biology" },
];
const f=students.filter(student =>student.score>70);
console.log(f)
const grade=students.map(student => {
    let g;
    if(student.score>=90){
        g='A';

    }
    else if (student.score>=80)
    {
        g='B';
    }
    else if (student.score>=70)
    {
        g='C';
    }
    else if (student.score>=60)
    {
        g='D';
    }
    else
    {
        g='F'
    }
    return { grade:g};
})
console.log(grade) 
const total=students.reduce((sum,student) => sum+student.score,0)
console.log(total)
const avg=total/students.length;
console.log(avg.toFixed(2))
const avgs=students.filter(student => student.score>avg)
console.log(avgs)
