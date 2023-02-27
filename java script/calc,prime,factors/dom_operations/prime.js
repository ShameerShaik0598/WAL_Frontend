let input = document.querySelector(".number1");
let checkPrime = document.querySelector(".btn1");
let result = document.querySelector(".result");
checkPrime.addEventListener("click", () => {
  let number = Number(input.value);
  result.textContent = "";
  let count = 0;
  for (let num = 1; num <= number; num++) {
    if (number % num == 0) count++;
  }
  count == 2
    ? (result.textContent = `${number} is prime number`)
    : (result.textContent = `${number} is not a prime number`);
});
