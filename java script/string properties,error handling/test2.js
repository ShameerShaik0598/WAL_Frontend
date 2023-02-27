function test(...arr) {
  console.log(arr.reduce((Element, accumulator) => Element + accumulator));
}
test(1, 2, 3, 4);
