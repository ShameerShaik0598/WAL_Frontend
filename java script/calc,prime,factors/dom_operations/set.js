// new as a constructor Set is used to create a set
//operations using set

let set = new Set();

set.add(10);
set.add(20);
set.add(10);
set.add(30);
set.add(40);

console.log(set);

set.delete(20);
console.log(set);

console.log(set.has(20));

console.log(set.keys(20));

console.log(set.values(20));

console.log(set.size);

console.log(set.entries());

//deleting objects using ref through for loop

let set3 = new Set();
set3.add({ a: 10 });
set3.add({ b: 20 });
set3.add({ c: 30 });

for (let v of set3) {
  if (v.b == 20) {
    set3.delete(v);
  }
}
console.log(set3);
