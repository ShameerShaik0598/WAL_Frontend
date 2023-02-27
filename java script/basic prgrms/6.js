let array = [10, 20, 30, -12, 6, 45];
for (let element of array) {
  if (element < 30) console.log(element);
}

//filter

let result1 = array.filter((element) => element < 30);
console.log(result1);
let result2 = array.map((element) => element +10);
console.log(result2);
