try {
  let age = 2;
  console.log(age);
  if (age <= 20) {
    throw new Error("Age is not below 20");
  }
} catch (err) {
  console.error(err.message);
} finally {
  console.error("error handling is done");
}
let obj = {
  eno: 100,
  username: "ravi",
  skills: ["Java", "ReactJS"],
  address: {
    street: "miyapur",
    city: "hyderabad",
  },
};
let { address } = obj;
console.log(address);
