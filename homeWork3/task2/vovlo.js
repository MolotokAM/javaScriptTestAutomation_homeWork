function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}

Car.prototype.drive = function () {
  console.log(`${this.model} crashes.`);
}

class Volvo extends Car {
  drive() {
    console.log(`${this.model} doesn't drive.`);
  }
}

let V = new Car('Volvo XC90');
V.drive();