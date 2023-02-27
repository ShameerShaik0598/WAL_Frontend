function Emp(name, age, basic) {
  this.name = name;
  this.age = age;
  this.basic = basic;
}
Emp.prototype.getSalary = function () {
  let hra = 0.15 * this.basic;
  let da = 0.1 * this.basic;
  let salary = this.basic + hra + da;
  return salary;
};

let emp1 = new Emp("shamir", 22, 1000);
console.log(emp1.getSalary());

let emp2 = new Emp("pavan", 22, 1200);
console.log(emp2.getSalary());

let emp3 = new Emp("chai", 22, 18000);
console.log(emp3.getSalary());

let emp4 = new Emp("ravi", 22, 13000);
console.log(emp4.getSalary());

let emp5 = new Emp("laxman", 22, 10040);
console.log(emp5.getSalary());
