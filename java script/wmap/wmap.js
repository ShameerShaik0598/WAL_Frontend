//map &weakmap
// weak map can only used when there is are strong references
// used to clear the cache (cache is limited)

// let obj ={a: 2};

// let map = new Map();
// map.set(obj, "hi");

// let wmap = new WeakMap();
// wmap.set(obj, "hi");

// for (let m of map) {
//   console.log("map befoe", m);
//}

// console.log("obj before unset", obj);

// obj = null;
// console.log("obj before after", obj);
// for (let m of map) {
//   console.log("map after", m);
//}

// let set = new Set();
// set.add({ a: 10});

// console.log(set);

// for (let x of set) {
//   console.log(x);
//}

// let ws = new Set();
// let foo = {};
// let boo = {};

// ws.add(foo);
// ws.add(boo);

// ws.has(foo);
// ws.has(boo);

const productsArray = [
  {
    name: "Shirt",
    variant: [
      { color: "red", size: "S" },
      { color: "blue", size: "M" },
    ],
  },
  {
    name: "Pants",
    variant: [
      { color: "green", size: "L" },
      { color: "black", size: "XL" },
    ],
  },
  {
    name: "Dress",
    variant: [
      { color: "pink", size: "S" },
      { color: "purple", size: "M" },
    ],
  },
];


//flatmap