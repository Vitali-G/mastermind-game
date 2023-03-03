class Mastermind {
  constructor() {
    this.code = this.generateCode(4);
    this.guesses = 10;
    this.guessHistory = {};
  }

  generateCode(length) {
    const CHARACTERS = "rgba".split("");
    let string = "";

    for (let i = 0; i < length; i++) {
      string += CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
    }

    return string;
  }

  guess(query) {
    if (this.code.length != query.length)
      return "Make sure your guess matches the length of the code";

    if (this.guesses === 0) return "lose";
    this.guesses--;

    let count = 0;
    let win = false;

    for (let i = 0; i < this.code.length; i++) {
      if (this.code[i] === query[i]) {
        count++;
      }

      if (count === this.code.length) {
        win = true;
      }
    }

    if (win) {
      return win;
    } else {
      let guess = { prev: query, match: count, guesses: this.guesses };
      // getting the guess number and appending that to the object as a key
      this.guessHistory = {
        ...this.guessHistory,
        ["guess " + (10 - this.guesses)]: guess,
      };
      return count;
    }
  }
}

module.exports = Mastermind;
