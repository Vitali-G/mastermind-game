const Mastermind = require("./game.js");

const game = new Mastermind();

function intro() {
  console.log(
    "Welcome to MasterMind, you have 10 guesses to make sure you don't blow up! \n"
  );
  console.log("Acceptable Characters: @!*$ \n");
  console.log("Guess the 4 character sequence!\n");

  console.log("use ^C to exit game.");
}

console.clear();
intro();

while (game.status === null) {
  console.log(game.code);
  game.guess();
}
