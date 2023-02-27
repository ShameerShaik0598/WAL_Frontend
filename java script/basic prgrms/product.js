// 9. Create Product constructor function and add properties brand, price, model and add getDiscountPrice method to its prototype. Create 5 Products objects and print their discount price.
// Note: For each object of these 5 , send different discount percentages as argument

function Product(brand, price, model) {
  this.brand = brand;
  this.price = price;
  this.model = model;
}
Product.prototype.getDiscountPrice = function (discountpercentage) {
  return (discountpercentage / 100) * this.price;
};

let prod1 = new Product("brand1", 200, "model101");
console.log(prod1.getDiscountPrice(25));

let prod2 = new Product("brand121", 40, "model102");
console.log(prod2.getDiscountPrice(25));

let prod3 = new Product("brand3", 600, "model103");
console.log(prod3.getDiscountPrice(25));

let prod4 = new Product("brand4", 800, "model104");
console.log(prod4.getDiscountPrice(25));

let prod5 = new Product("brand5", 1000, "model105");
console.log(prod5.getDiscountPrice(25));
