class Pirate {
  constructor(pirateName, job) {
    this.name = pirateName;
    this.job = job || 'scallywag';
    this.cursed = false;
    this.booty = 0;
  }

  robShip() {
    if (this.booty <= 400) {
      this.booty += 100;
      return 'YAARRR!';
    } else {
      this.cursed = true;
      return `ARG! I've been cursed!`;
    }
  }

  liftCurse() {
    //note: if (this.cursed = true) doesn't work!?
    console.log(this);
    if (this.cursed) {
      this.booty -= 300;
      this.cursed = false;
      return `Your curse has been lifted!`;
    } else {
      return `You don't need to lift a curse!`;
    }
  }

}

module.exports = Pirate;
