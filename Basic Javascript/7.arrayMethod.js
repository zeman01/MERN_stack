const numbers = [89, 3, 8, 53, 65];
// const arr = new Array()

// searching
//* includes(val) -> boolean
console.log(numbers.includes(63));
console.log(numbers.includes(53));

//* indexOf(val) -> index
console.log(numbers.indexOf(53));
console.log(numbers.indexOf(63));

// lastIndexof()
console.log(numbers.lastIndexOf(53));

//hof
//* forEach
const res = numbers.forEach((value, index, arr) => {
  // console.log(value,index,arr)
});
// console.log(res)

//* map
// transform each element. and returns new array
const doubled = numbers.map((value) => {
  return value * 2;
});

// const doubled = numbers.map( (value,index) => value + index)

console.log(doubled);

// a => A

//* filter

const even_numbers = numbers.filter((value) => {
  if (value % 2 === 0) {
    return value;
  }
});

const odd_numbers = numbers.filter((value) => value % 2 !== 0);

console.log(even_numbers);
console.log(odd_numbers);

//* reduce

const sum = numbers.reduce((acc, val) => {
  return (acc += val);
}, 10);

console.log(sum);

console.log(numbers);

// findIndex
// find
const result = numbers.find((value) => {
  if (value > 100) return value;
});

const index = numbers.findIndex((value) => {
  if (value > 100) return value;
});

// console.log(result)
console.log(result, index);

// slice
const arr_copy = numbers.slice(1, 3);
console.log(arr_copy);

// splice
// arr.splice(start, delete_count, item1,item2, ......)

numbers.splice(2, 0, 65, 80, 6, 8);

console.log(numbers);

// includes, slice splice indexOf
// map filter reduce
// find findIndex

const nums = [4, 5, 24, 2, 56, 5, 78, 9, 101, 11];
const users = ["sita", "gita", "abhay", "hari"];

// sort
// arr_name.sort()
users.sort((a, b) => {
  return b.localeCompare(a);
});

// +ve -> swap
// -ve -> no swap
// 0 -> no swap
// [4,5,24,2,56,5,78,9,101,11]  => [4,2,5,24,5,56,9,78,11,101]
nums.sort((a, b) => {
  return a - b;
});
console.log(users);
console.log(nums);

// reverse
// array_name.reverse()
nums.reverse();

console.log(nums);

// some / every

const is_every_even = numbers.every((value) => {
  return value % 2 === 0;
});

const is_some_even = numbers.some((value) => {
  return value % 2 === 0;
});

console.log(is_every_even, is_some_even);

//
const students = [
  {
    name: "alice",
    grade: 12,
    marks: [67, 78, 78, 98, 89],
    sec: "A",
    // avg_mark:45,
    // grade:''
  },
  {
    name: "Bob",
    grade: 11,
    marks: [67, 78, 78, 98, 89],
    sec: "A",
  },
  {
    name: "Charlie",
    grade: 10,
    marks: [67, 78, 78, 98, 89],
    sec: "B",
  },
  {
    name: "Ram",
    grade: 10,
    marks: [45, 20, 78, 18, 60],
    sec: "B",
  },
];

// TODO:
// 1. avg_marks = <- reduce
// 2. based on avg_marks > calculate score -> A,B,C
// 3. filter passed studdents -> filter
// 'Charlie-10-89.7-B'

// 1.map
// 2.marks -> reduce
// 3.if .. else / switch case -> score
// 4.filter
//5. map

const calculate_avg = (marks) => {
  const total_mark = marks.reduce((acc, mark) => {
    return acc + mark;
  }, 0);

  return total_mark / marks.length;
};

const calculate_score = (avg) => {
  if (avg >= 90) {
    return "A";
  }

  if (avg >= 80) {
    return "B";
  }

  if (avg >= 60) {
    return "c";
  }

  if (avg >= 50) {
    return "D";
  }

  return "Fail";
};

//
const student_avg_mark = students.map((student) => {
  // calculate avg for student
  const avg = calculate_avg(student.marks);
  // calculate score
  const score = calculate_score(avg);

  student["score"] = score;
  student["avg_mark"] = avg;

  return student;
});

console.log(student_avg_mark);

const passed_student = student_avg_mark.filter( 
  (student) => student.avg_mark >= 50
);

console.log(passed_student);

const results = passed_student.map(
  (student) =>
    `${student.name}-${student.grade}-${student.avg_mark}-${student.score}`
);

const passed = students
  .map((student) => {
    // calculate avg for student
    const avg = calculate_avg(student.marks);
    // calculate score
    const score = calculate_score(avg);

    student["score"] = score;
    student["avg_mark"] = avg;

    return student;
  })
  .filter((student) => student.avg_mark >= 50)
  .map(
    (student) =>
      `${student.name}-${student.grade}-${student.avg_mark}-${student.score}`
  );

console.log(results);
console.log(passed);