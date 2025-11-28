const readline = require("readline");
const userInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function rollDice(sides) {
  const diceResult = Math.floor(Math.random() * sides) + 1;
  return diceResult;
}
function startGame(){
userInput.question("How many sides?: ", sidesInput => {
    const sides = Number(sidesInput);
    if ( sides <= 2 || isNaN(sides) || Number.isInteger(sides) === false){
        console.log("Please pick a integer greater than 2")
        return startGame();
    }
    else{
    console.log("you picked: " + sides + " number of sides")
    playGame(sides);
    }
})
}
function playGame(sides) {
  userInput.question("Guess hte die number: ", GuessedInput => {
    const userGuess = Number(GuessedInput);
    const roll = rollDice(sides);
    console.log(`You Rolled a: ${roll}!`);
    if (userGuess === roll) {
      console.log("Winner");
    } else {
      console.log("wrong");
    }
    userInput.question("Play again? yes/no: ", answer => {
        console.log(answer)
        if (answer.toLowerCase() === "yes"){
            startGame();
        } else {console.log("game terminates")
            userInput.close();
        }
    })
  });
}
startGame();