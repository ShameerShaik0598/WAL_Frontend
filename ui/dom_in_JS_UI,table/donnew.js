// creating para through dom
let parabtn = document.querySelector(".btn");
let divcontainer = document.querySelector(".container");

parabtn.addEventListener("click", () => {
  // para.append("This is a Paragarph");
  let para = document.createElement("p");
  para.textContent = "This is Paragraph";
  divcontainer.append(para);
});


