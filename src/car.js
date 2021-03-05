export class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  info() {
    return (`This ${make} ${model} was made in ${year}.`);
  }
}
