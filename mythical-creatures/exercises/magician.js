class Magician {
  constructor(mageName) {
    this.name = `The Great ${mageName.name}`;
    this.assistant = mageName.assistant;
    this.favoriteAccessory = mageName.clothing || 'top hat';
    this.confidencePercentage = 10;
  }

  performIncantation(magicWord) {
    var result = magicWord.toUpperCase();
    return `${result}!`;
  }

  performTrick() {
    this.confidencePercentage += 10;
    if (this.favoriteAccessory === 'top hat') {
      return `PULL RABBIT FROM TOP HAT`;
    } else {
      return `PULL DOVE FROM SLEEVE`;
    }
  }

  performShowStopper() {
    if (this.confidencePercentage >= 100 && this.assistant) {
      return `WOW! The magician totally just sawed that person in half!`;
    } else {
      return `Oh no, this trick is not ready!`;
    }
  }

}

module.exports = Magician;
