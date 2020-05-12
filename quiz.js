/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/

let correctAnswers = 0;

    
// 2. Store the rank of a player

let playerRank = '';





if (correctAnswers === 0) {
  playerRank = 'No crown';
  let message = `<p>You've answered ${correctAnswers} out of 5 questions correctly. You earned: ${playerRank}</p>`
  document.querySelector('main').innerHTML = message

}  /*else if (correctAnswers === 1) {
  playerRank = 'Bronze crown';
  let message = `<p>You've answered ${correctAnswers} out of 5 questions correctly. You earned: ${playerRank}</p>`
  document.querySelector('main').innerHTML = message

}

// 3. Select the <main> HTML element

let message = `You've answered ${correctAnswers} out of 5 questions correctly. You earned: ${playerRank}`

document.querySelector('main').innerHTML = message



/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
/*
q1 = "A coin" || "coin"
q2 = "Rivia"
q3 = "Yaskier";
q4 = "Ciri";
q5 = "Pavetta and Duny";


const a1 = prompt("What do you toss to a witcher?"); 
const a2 = prompt("Where is Geralt from?");
const a3 = prompt("What's the bard's name?");
const a4 = prompt("Who's Gerlat's Child of Surprise?");
const a5 = prompt("Name Ciri's parents");



//condition that counts correct anwers

if (a1.toUpperCase() = "A coin" || (a1.toUpperCase() = "coin") {
  correctAnswers += 1;
} 




/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/


// 6. Output results to the <main> element

