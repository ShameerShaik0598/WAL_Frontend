function testout() {
  let a = 100;
  return function testin() {
    let b = 50;
    return function test1() {
      return a + b;
    };
  };
}

//closure

let result1 = testout();
console.log(testout());
let result2 = result1();
console.log(result2());
