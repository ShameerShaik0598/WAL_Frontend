// Consider the string “Good morning to all of you”. Find number of words and no of chars in each word of this string
// Consider the string “aaabbabababababababbaaaa”. Find frequency of “a” and “b”\
// Write a function to receive a string and  to returns the reversed string
// let s1 = "good morning to all of you";
// result = s1.split(" ");
// console.log(result);
// console.log(result.length);
// result2 = s1.split("");
// console.log(result2);
// console.log(result2.length);

let str = "good morning to all of you";
let len = str.split(" ");
let char = str.split("");
for (element of len) {
  console.log(element);
  temp = element.split("");
  console.log("The length of the char is : ", temp.length);
}

countofA = 0;
countofB = 0;
let s2 = "aaabbabababababababbaaaa";
let frequency = s2.split("");
frequency.filter((element) => {
  if (element == "a") {
    countofA++;
  }

  if (element == "b") {
    countofB++;
  }
});
console.log("The frequency of 'A' is : ", countofA);
console.log("The frequency of 'B' is : ", countofB);
