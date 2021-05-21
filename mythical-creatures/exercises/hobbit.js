class Hobbit {
  constructor({name: hobName}) {
    this.name = hobName;
    this.age = 0;
    this.adult = false;
    this.old = false;
    this.hasRing;
  }

  celebrateBirthday() {
    this.age += 1;
    if (this.age > 100) {
      this.old = true;
    }
    if (this.age >= 33) {
      this.adult = true;
    }
  }

  getRing() {
    var message = '';
    if (this.name === 'Frodo') {
      this.hasRing = true;
      message = `Here is the ring!`;
    } else {
      this.hasRing = false;
      message = `You can't have it!`;
    }
    return message;
  }
}


module.exports = Hobbit;
