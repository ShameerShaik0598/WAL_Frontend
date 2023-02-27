
// function operation() {
let ref1 = setInterval(() => {
  console.log("2sec interval");
}, 2000);

function stopInterval() {
  clearInterval(ref1);
}

let ref2 = setInterval(() => {
  console.log("4-sec interval");
}, 4000);

function stopInterval2() {
  clearInterval(ref2);
}

document.querySelector(".btn1").addEventListener("click", stopInterval);
document.querySelector(".btn2").addEventListener("click", stopInterval2);
