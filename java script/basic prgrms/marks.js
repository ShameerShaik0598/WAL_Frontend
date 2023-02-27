let students = [
  {
    name: "ravi",
    age: 20,
  },
  {
    name: "bhanu",
    age: 30,
  },
  {
    name: "kiran",
    age: 26,
  },
  {
    name: "madhu",
    age: 37,
  },
  {
    name: "vikas",
    age: 30,
  },
];
let studentbtw2030 = students.filter((student) => {
  if (student.age > 20 && student.age < 30) return student;
});
console.log(studentbtw2030);

let aakash = students.find((student) => student.name === "aakash");
if (aakash) console.log(aakash);
else console.log("aakash is not found");
