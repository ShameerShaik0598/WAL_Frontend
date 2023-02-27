//prime

let array7 = [1, 2, 3, 4, 5];
function findprime(array7) {
  let prime = [];
  for (let element of arr) {
    factorcount = 0;
    for (let i = 0; i <= element; i++) {
      if (element % i == 0) factorcount++;
    }
    if (factorcount == 2) prime.push(element);
  }
  return;
}

let array1 = [1, 2, 3, 4, 5];
let small = array1[0];
let big = array1[0];
for (let element of array1) {
  if (element > big) big = element;
  if (element < small) small = element;
}
console.log(big);
console.log(small);
