// let obj = {
//   a: 10,
//   b: 20,
// };
// let copyobj = Object.assign({}, obj);
// console.log("obj:", obj);
// console.log("copyobj:", copyobj);
// console.log(obj == copyobj);

// let obj1 = {
//   a: 10,
//   b: 20,
// };

// let obj2 = {
//   c: 30,
// };
// let copyobj = Object.assign({}, obj1, obj2);
// // console.log("obj:", obj);
// // console.log("copyobj:", copyobj);
// console.log(...obj1, ...obj2);

let a = [1, 2, 3];
let b =a;
console.log(...a,...b);
