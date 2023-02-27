// let num = document.querySelector("input");
// let result = document.querySelector("button");

// result.addEventListener("click", () => {
//   let n1 = number(num.value);
//   for (let i = 1; i < n1; i++) {
//     if (n1 % i == 0) {
//       console.log(i);
//     }
//   }
// });


let input1 = document.querySelector(".number1");
let btn = document.querySelector(".btn1");
let container = document.querySelector(".container");
let result = document.createElement("h2");
// container.append(result);
btn.addEventListener("click", () => {
  for (let i = 0; i <= input1.value; i++) {
    if (+input1.value % i == 0) {
      newElement(i);
    }
  }
});
// Main function
let newElement = (latestValue) => {
  let h1 = document.createComment("h1");
  h1.textContent = latestValue;
  container.append(h1.textContent);
};