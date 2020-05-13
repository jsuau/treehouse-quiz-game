// Store correct answers. When quiz begins, no answers are correct

let correctAnswers = 0;

    
// Store the rank of a player

let playerRank = '';

// Store answers in a variable
let a1 = prompt("What do you toss to a witcher?").toUpperCase();
let a2 = prompt("Where is Geralt from?").toUpperCase();
let a3 = prompt("What's the bard's name?").toUpperCase();
let a4 = prompt("Who's Gerlat's Child of Surprise?").toUpperCase();
let a5 = prompt("Name Ciri's mother").toUpperCase();
console.log(a1 + a2 + a3 + a4 + a5);

// Add a condition to add up a point for each good answer

if (a1 == "A COIN" || a1 == "COIN") {
  console.log(correctAnswers += 1);
} if (a2 == "RIVIA") {
    console.log(correctAnswers += 1);

} if (a3 == "YASKIER") {
    console.log(correctAnswers += 1);

} if (a4 == "CIRI") {
    console.log(correctAnswers += 1)
  
} if (a5 == "PAVETTA") {
     console.log(correctAnswers += 1)

}

// Display a message and rank a player according to points scored

if (correctAnswers === 0) {
  playerRank = 'No crown';
  let message = `<p>You've answered ${correctAnswers} out of 5 questions correctly. You've earned: ${playerRank}</p>`
  document.querySelector('main').innerHTML = message

} else if (correctAnswers <= 2) {
  playerRank = 'Bronze crown';
  let message = `<p>You've answered ${correctAnswers} out of 5 questions correctly. You've earned: ${playerRank}</p>`
  document.querySelector('main').innerHTML = message

} else if (correctAnswers <= 4) {
  playerRank = 'Silver crown';
  let message = `<p>You've answered ${correctAnswers} out of 5 questions correctly. You've earned: ${playerRank}</p>`
  document.querySelector('main').innerHTML = message
  
} else if (correctAnswers == 5) {
  playerRank = 'Gold crown';
  let message = `<p>You've answered ${correctAnswers} out of 5 questions correctly. You've earned: ${playerRank}</p>`
  document.querySelector('main').innerHTML = message
}



