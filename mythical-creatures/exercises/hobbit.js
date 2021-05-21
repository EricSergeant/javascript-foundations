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

//     if (time < 10) {
//   greeting = "Good morning";
// } else if (time < 20) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

    // if (this.age >= 101) {
    //   this.old = false;
    // };

    // } else if
    //   (this.age >= 101) {
    //     this.old = false;
      // } else {
      // this.adult = false;
    // }


module.exports = Hobbit;
