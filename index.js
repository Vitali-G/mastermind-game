class Mastermind {
    constructor({ wordLength }) {
      this.code = this.generateCode(wordLength || 4);
    }
  
    generateCode(length) {
      const CHARACTERS = "abcd".split("");
      let string = "";
  
      for (let i = 0; i < length; i++) {
        string += CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
      }
  
      return string;
    }
  
    guess(query) {
      if (this.code.length != query.length)
        return "Make sure your guess matches the length of the code";
  
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
        return !!count ? count : "no matches";
      }
    }
  }
  
  const game = new Mastermind({ wordLength: 4 });
  
  console.log(game.code);
  console.log(game.guess("dbca"));