// Q1. make a string out of an array
// join()
{
  const fruits = ["apple", "banana", "orange"];
  // fruits.forEach((index, value) => {
  //   process.stdout.write(`${index} `);
  // });
  // const result = fruits.join(" ");
  // console.log(result);
}

// Q2. make an array out of a string
// split()
{
  // const fruits = "π, π₯, π, π";
  // const arr = fruits.split(",");
  // console.log(arr);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
// reverse()
{
  // const array = [1, 2, 3, 4, 5];
  // const result = array.reverse();
  // console.log(result);
}

// Q4. make new array without the first two elements
// slice() λ°°μ΄μ νΉμ ν λΆλΆμ return
{
  // const array = [1, 2, 3, 4, 5];
  // const result = array.slice(2);
  // console.log(result);
  // console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
// find()
{
  // students.forEach((value) => {
  //   if (value.score >= 90) {
  //     console.log(value.name);
  //   }
  // });
  // const result = students.find(function (a, b, c, d) {
  //   return a.score === 90;
  // });
  // console.log(result);
}

// Q6. make an array of enrolled students
// filter()
{
  // const arr = [];
  // students.find((student) => {
  //   if (student.enrolled === true) {
  //     arr.push(student);
  //   }
  // });
  // console.log(arr);
  // const reuslt = students.filter((a) => {
  //   return a.enrolled === true;
  // });
  // console.log(reuslt);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
// map() κ°μ λ³κ²½ν λλ μ¬μ©.
// const b = [];
// students.filter((a) => {
//   b.push(a.score);
// });
// console.log(b);

// const result = students.map((student) => {
//   return student.score;
// });
// console.log(result);

// Q8. check if there is a student with the score lower than 50
//some() => νλλΌλ μΆ©μ‘±νλκ²μ΄ μ‘΄μ¬νλ©΄
//every() => λͺ¨λ  κ²λ€μ΄ μ‘°κ±΄μ μΆ©μ‘±ν΄μΌμ§
// {
//   const result = students.some((student) => {
//     return student.score < 50;
//   });
//   console.log(result);
// }

// Q9. compute students' average score
//reduce() λμ  return νλ κ°μ΄ μ²μμΌλ‘ μ λ¬
{
  // const result = students.reduce((prev, curr) => {
  //   console.log(`--------`);
  //   console.log(prev);
  //   console.log(curr);
  //   return prev.score + curr.score;
  // });
  // console.log(`νκ· :${result / students.length}`);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
// apiλ€μ λ¬Άμ΄μ κ³μ μ¬μ© -> ν¨μν νλ‘κ·Έλλ° κ°λμ±λ μ’μμ§
{
  // const result = students
  //   .map((student) => {
  //     return student.score;
  //   })
  //   .filter((score) => score >= 50)
  //   .join(",");
  // console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students.map((student) => student.score).sort();
  console.log(result);
}
