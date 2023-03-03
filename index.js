const Mastermind = require('./game.js')

const game = new Mastermind();
console.log('correct code: ', game.code);
game.guess("rgba")
console.table(game.guessHistory);
game.guess("rrbr")
console.table(game.guessHistory);