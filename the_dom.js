// Hi/Lo Game Webpage
//
// Challenges:
//
// Create webpage that allows a user to play the Hi/lo game.
// Create a function that plays the following game: The computer picks a secret random integer between 1 and 100 (both inclusive), and repeatedly asks the user for guesses.
// If the users guess is too high or too low, the computer notifies them of that; and if the user guesses the secret number correctly, the computer displays a winning message and the game is over.
// If the user has not guessed the secret number in seven tries, the user loses.
// Validate the users input. If the user puts a anything other than a number, tell the user they can only use numbers, can clear the input field.
// Allow the user to put there name in before the game starts. When the user has won the game, let the user know they have won, using their name.
var equation
function numberPick(){
  equation = (Math.floor((Math.random() * 100) + 1));
  console.log(equation);
}
var name
function getName() {
  name = document.getElementById("name").value
console.log(name)
}
//User picks number and compares to computer number
var attempt = 1;
function userGuess(){
  var guess = parseInt(document.getElementById("guess").value);
  console.log(guess)
  if (isNaN(guess)) {
    document.getElementById("result").innerHTML= "Please enter a valid number."
    document.getElementById("guess").value= ""
  } else {
        if (attempt < 7){
          if (guess > equation){
          document.getElementById("result").innerHTML= "Your guess was too high, try again."
          document.getElementById("guess").value= ""
          attempt++;
          }
          else if (guess < equation){
            document.getElementById("result").innerHTML= "Your guess was too low, try again."
            document.getElementById("guess").value= ""
            attempt++;
          }
          else if(guess === equation){
            document.getElementById("result").innerHTML= "Way to go, " +name  + "! Your guess was correct!!!"
          }
        }
        else if (guess != equation && attempt === 7){
            document.getElementById("result").innerHTML= "You guessed too many times. Game Over!"
          }
    }
    console.log(attempt)
  }


//
// function userGuess(){
//   var guess = document.getElementById("guess").value;
//   var attempt = 1;
//   while (guess != equation && attempt < 7){
//     if (guess > equation){
//     document.getElementById("result").innerHTML= "Your guess was too high, try again."
//     document.getElementById("guess").value= ""
//     attempt++;
//     }
//     else if (guess < equation){
//       document.getElementById("result").innerHTML= "Your guess was too low, try again."
//       document.getElementById("guess").value= ""
//       attempt++;
//     }
//     else if(guess === equation && attempt < 7){
//       document.getElementById("result").innerHTML= "Your guess was correct!!!"
//
//     }
//     else if(guess != equation && attempt === 7){
//       document.getElementById("result").innerHTML= "You guessed too many times. Game Over!"
//
//     }
//   }
//
// }
// userGuess();
