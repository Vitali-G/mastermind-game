const Mastermind = require("./game.js");

const game = new Mastermind();

function intro() {
  console.log(
    "Welcome to mastermind, you have 10 guesses to make sure you dont blow up! \n"
  );
  console.log("Acceptable Characters: @!*$ \n");
  console.log("Guess the 4 letter sequence \n");

  console.log("use ^C to exit game.\n");
}

intro();
while (!game.win && game.guesses) {
  console.log(game.code);
  game.guess();
}
