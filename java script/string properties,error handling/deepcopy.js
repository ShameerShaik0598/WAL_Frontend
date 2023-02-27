// Create copy of {

// and verify whether  it is deep copy or shallow copy.
// If it is shallow copy, Create Deep copy and verify the result

// let obj = {
//   eno: 100,
//   username: "ravi",
//   skills: ["Java", "ReactJS"],
//   address: {
//     street: "miyapur",
//     city: "hyderabad",
//   },``
// };

// let copy1 = JSON.parse(JSON.stringify(obj));
// console.log(copy1);

let obj = {
  eno: 100,
  username: "ravi",
  skills: ["Java", "ReactJS"],
  address: {
    street: "miyapur",
    city: "hyderabad",
  },
};
let { skills } = obj;
console.log(skills);
