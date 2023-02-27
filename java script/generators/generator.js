// creating infinite loop

function* test() {
  // yield 1;

  // yield 2;
  let v = 1;
  while (true) {
    yield v;
    v++;
  }

  // yield 4;
}

let generatorobject = test();
console.log(generatorobject.next());
console.log(generatorobject.next());
console.log(generatorobject.next());
console.log(generatorobject.next());
console.log(generatorobject.next());
console.log(generatorobject.next());
console.log(generatorobject.next());
console.log(generatorobject.next());
console.log(generatorobject.next());
console.log(generatorobject.next());

// let generatorobject = test();
// let generatorobject1 = test();
// let generatorobject2 = test();
// console.log(generatorobject.next());
// console.log(generatorobject1.next());
// console.log(generatorobject2.next());
