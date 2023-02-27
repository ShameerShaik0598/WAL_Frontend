let button = document.querySelector("button");
let darktheme = document.querySelector("body");
let container = document.querySelector(".container");
let down = document.querySelector(".down");

button.addEventListener("click", () => {
  button.style.color = "white";
  darktheme.style.backgroundColor = "black";
  darktheme.style.backgroundColor = "pink";
  container.style.backgroundColor = "black";
  down.style.backgroundColor = "red";
});
