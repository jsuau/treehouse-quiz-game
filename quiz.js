// Store correct answers. When quiz begins, no answers are correct

let correctAnswers = 0;

    
// Store the rank of a player

let playerRank = '';

//Target a main element and store it in a variable

let message = document.querySelector('main');



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

// Add a condition to rank a player for their correct answers

if (correctAnswers === 0) {
  playerRank = 'No crown';

} else if (correctAnswers <= 2) {
  playerRank = 'Bronze crown';

} else if (correctAnswers <= 4) {
  playerRank = 'Silver crown';
  
} else if (correctAnswers == 5) {
  playerRank = 'Gold crown';
}

//Display a message and rank a player according to points scored

message.innerHTML = `<p>You've answered ${correctAnswers} out of 5 questions correctly. You've earned: ${playerRank}</p>`;



