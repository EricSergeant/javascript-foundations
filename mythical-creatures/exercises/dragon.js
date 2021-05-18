class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.meals = 0;
  }
  greet() {
    return `Hi, ${this.rider}!`;
  }
  eat() {
    if (this.meals < 2) {
      this.meals += 1;
    } else {
      this.hungry = false;
    }
  }
}

module.exports = Dragon;
