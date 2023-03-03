const Mastermind = require('./game.js')

const game = new Mastermind();
console.log('correct code: ', game.code);
game.guess("rgba")
console.log('history: ', game.guessHistory);
game.guess("rrbr")
console.log('history: ', game.guessHistory);