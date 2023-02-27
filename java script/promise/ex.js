//optional chaining

let person = {
  namee: "shameer",
  age: 22,
  address: {
    street: "kphb",
    city: "hyd",
    pincode: "34567",
  },
};

console.log(
  person.address.pincode ? person.address.pincode.length : "not entered"
);
console.log(person.address.city.pincode && person.address.city.pincode.length);
