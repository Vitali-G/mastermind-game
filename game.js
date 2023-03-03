const prompt = require("prompt-sync")({ sigint: true });

const GAME_STATUS = {
  GAME_WIN: "win",
  GAME_LOSE: "lose",
  GAME_PLAYING: null,
};

class Mastermind {
  constructor() {
    this.code = this._generateCode(4);
    this.guesses = 10;
    this.guessHistory = this._fill();
    this.status = GAME_STATUS.GAME_PLAYING;
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

  _appendHistory(query, count) {
    let guess = { prev: query, match: count };
    // getting the guess number and appending that to the object as a key
    this.guessHistory = {
      ...this.guessHistory,
      ["guess " + (10 - this.guesses)]: guess,
    };
    console.table(this.guessHistory);
  }

  _calcScore(query) {
    let count = 0;
    for (let i = 0; i < this.code.length; i++) {
      if (this.code[i] === query[i]) count++;
    }
    return count;
  }

  _log(message) {
    console.clear();
    console.table(this.guessHistory);
    console.log(message);
  }

  guess() {
    const query = prompt("WHAT'S THE SEQUENCE!!! ");
    console.clear();

    // format query
    if (this.code.length !== query.length) {
      return this._log("Make sure your guess matches the length of the code");
    }

    // check if lose
    if (this.guesses === 1) {
      this._log("BOOOOOOOM BOMB EXPLODED");
      return (this.status = GAME_STATUS.GAME_LOSE);
    }

    // decrease guess
    this.guesses--;

    // if code === query they win
    if (this.code === query) {
      this.status = GAME_STATUS.GAME_WIN;
      return this._log(`WIN!! BOMB DEFUSED!!! code = ${this.code}`);
    }

    let count = this._calcScore(query);
    this._appendHistory(query, count);
  }
}

module.exports = Mastermind;
