const prompt = require("prompt-sync")({ sigint: true });

class Mastermind {
  constructor() {
    this.code = this._generateCode(4);
    this.guesses = 10;
    this.guessHistory = this._fill();
    this.win = false;
  }

  _generateCode(length) {
    const CHARACTERS = "@!*$".split("");
    let string = "";

    for (let i = 0; i < length; i++) {
      string += CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
    }

    return string;
  }

  _fill() {
    let history = {};
    let guess = { prev: "0000", match: null };

    for (let i = 0; i < this.guesses; i++) {
      history = { ...history, ["guess " + (i + 1)]: guess };
    }

    return history;
  }

  guess() {
    const query = prompt("WHAT'S THE SEQUENCE!!! ");
    console.clear()
    // format query
    if (this.code.length !== query.length) {
      console.log("Make sure your guess matches the length of the code");
      return;
    }

    // check if lose
    if (this.guesses === 0) return "lose";
    // decrease guess
    this.guesses--;

    // if code === query they win
    if (this.code === query) this.win = true;
    else {
      var count = 0;
      for (let i = 0; i < this.code.length; i++) {
        if (this.code[i] === query[i]) count++;
      }
    }
    if (this.win === true) {
      console.log("win!!", this.code);
      return;
    } else {
      let guess = { prev: query, match: count };
      // getting the guess number and appending that to the object as a key
      this.guessHistory = {
        ...this.guessHistory,
        ["guess " + (10 - this.guesses)]: guess,
      };
      console.table(this.guessHistory);
      return count;
    }
  }
}

module.exports = Mastermind;
