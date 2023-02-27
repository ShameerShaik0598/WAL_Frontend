// // let clcbtn=document.querySelector(".btn")
// //array
// let divcontainer = document.querySelector(".container");
// let num = [1, 2, 3];
// // create h2  element
// //add array ele as content//append to div container
// h2.textContent = num;
// let h2 = document.createElement("h2");
// divcontainer.append(h2);

//adding objects through dom in js
let index=0;
let users = [
  {
    username: "ravi",
    email: "ravi@mail.com",
    age: 21,
  },
  {
    username: "suresh",
    email: "suresh@mail.com",
    age: 32,
  },
  {
    username: "bhanu",
    email: "bhanu@mail.com",
    age: 28,
  },
  {
    username: "vikas",
    email: "vikas@mail.com",
    age: 40,
  },
];

// let tbody = document.querySelector("tbody");

// users.filter((user) => {
//   let elementtr = document.createElement("tr");
//   for (let element in user) {
//     let elementtd = document.createElement("td");
//     elementtd.textContent = element;
//     elementtr.append(element);
//   }
//   tbody.append(elementtr);
// });

// correctoene
let tbody = document.querySelector("tbody");

for (let user of users) {
  //create tr
  let tr = document.createElement("tr");
  //each tr create 3td
  for (let key in user) {
    let td = document.createElement("td");
    //attach text
    td.textContent = user[key];

    //append tds to tr
    tr.append(td);
  }

  //append tr to body
  tbody.append(tr);
}

let tdelement = document.createElement("td");
let delbtn = document.createElement("button");
delbtn.textContent = "Delete";
tdelement.append(delbtn);
tr.appendchild(tdelement);
tbody.append(tdelement);

//creating elements in innerhtml in js
// let heading = "testing a dynamic element";
// divcontainer=document.querySelector(".container")
// divcontainer.innerHTML = `<div>
// <p>New Para added</p>
// <h3>heading 3 added</h3>
// </div>`;

// let users = [
//   {
//     username: "ravi",
//     email: "ravi@mail.com",
//     age: 21,
//   },
//   {
//     username: "suresh",
//     email: "suresh@mail.com",
//     age: 32,
//   },
//   {
//     username: "bhanu",
//     email: "bhanu@mail.com",
//     age: 28,
//   },
//   {
//     username: "vikas",
//     email: "vikas@mail.com",
//     age: 40,
//   },
// ];
