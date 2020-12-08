 console.log('Test')

 function computerPlay() {
     let args = ['Rock', 'Paper', 'Scissors']
     let random = args[Math.floor(Math.random() * args.length)].toLowerCase();
     // console.log(random)
     return random;
 }

 let count = 0;
 let playerScore = 0;
 let comScore = 0;


 function increment_count() {
     count += 1;
 }

 function increment_pScore() {
     playerScore += 1;
 }

 function increment_comScore() {
     comScore += 1;
 }
//   define  a function reset game(){
    // reset count,comscore,playerScore
    // update the dom with new data
// }
// Add a reset button
// form.reset(id)

function resetGame(){
    count = 0;
    playerScore = 0;
    comScore = 0;
    document.querySelector('.counter').innerText = count;
    document.querySelector('.player').innerText = playerScore;
    document.querySelector('.computer').innerText = comScore;
}
document.querySelector('.reset').addEventListener('click',resetGame)

 function playRound(p_Selection, com_Selection) {
    //  check if the score is 10 and reset counter and score 

    if(count === 10){
        return;
    }
     let choice = p_Selection.toLowerCase();
     let message = '';

     function print_com_Score() {
         message += 'I win mate!, you lose!'
         document.querySelector('.result').innerText = message;
         increment_comScore()
         document.querySelector('.computer').innerText = comScore;
     }

     function print_player_Score() {
         message += 'You win mate'
         document.querySelector('.result').innerText = message;
         increment_pScore()
         document.querySelector('.player').innerText = playerScore;
     }

     if (p_Selection.toLowerCase() === com_Selection) {
        // print_player_Score();
        document.querySelector('.result').innerText =`Hmm give it another shot!`
     } else if (choice === 'rock' && com_Selection === 'paper') {
         print_com_Score();
     } else if (choice === 'paper' && com_Selection === 'rock') {
         print_player_Score()
     } else if (choice === 'scissors' && com_Selection === 'paper') {
         print_player_Score();
     } else if (choice === 'paper' && com_Selection === 'scissors') {
         print_com_Score();
     } else if (choice === 'scissors' && com_Selection === 'rock') {
         print_com_Score();
     }

     increment_count();
     console.log(playerScore)
     console.log(comScore)

     // document.querySelector(".player").innerText = 
     // document.querySelector(".computer")
     // pScore.innerText = playerScore;
     //  document.querySelector('#computer').innerText = comScore;
     document.querySelector('.counter').innerText = count;
     //      switch (choice, com_Selection) {
     //          case choice ===  com_Selection:
     //              message += 'Draw Again';
     //              document.querySelector('.result').innerText = message;
     //              break;
     //          case choice === 'rock' && com_Selection === 'paper':
     //              message += 'I win mate!, you lose!'
     //              document.querySelector('.result').innerText = message;
     //              break;

     //          case choice === 'paper' && com_Selection === 'rock':
     //              message += 'You win mate!'
     //              document.querySelector('.result').innerText = message;
     //              break;

     //          case choice === 'scissors' && com_Selection === 'paper':
     //              message += 'You win mate'
     //              document.querySelector('.result').innerText = message;
     //              break;

     //          case choice === 'paper' && com_Selection === 'scissors':
     //              message += 'I win mate!, you lose!'
     //              document.querySelector('.result').innerText = message;
     //              break;
     //          default:
     //              message += 'Try again!'
     //              document.querySelector('.result').innerText = message;

     //      }
     //      increment_count()
     //      document.querySelector('.counter').innerText = count;
 }

 const btn = document.querySelectorAll('.btn')
 btn.forEach(button => button.addEventListener('click', function (element) {
     console.log(element.target.value)
     let player_choice = element.target.value;
     let computerSelection = computerPlay();
     playRound(player_choice, computerSelection);
     console.log(computerSelection)

 }))

 //  function playRound(playerSelection, computerSelection) {

 //      document.querySelector('.layout').addEventListener('click', function (e) {
 //              let message = '';
 //              let count = 0;
 //              playerSelection = e.target.id;
 //              //  return playerSelection;
 //              console.log(playerSelection)
 //              computerSelection = computerPlay();
 //              console.log(computerSelection)
 //              if (playerSelection === computerSelection) {
 //                  message += 'You lose bro, I win!'
 //                  count++
 //                  console.log(count)
 //                  document.querySelector('.result').innerText = message;
 //              } else {
 //                  message += 'You win mate, i lose!'
 //                  document.querySelector('.result').innerText = message;
 //                  console.log(count)
 //              }
 //              return message;

 //          }

 //      )

 //  }

 //  1. How to loop the function playround
 // 2.How to set counter



 //  console.log(playRound())

 function game() {


     //  console.log(playRound())
     //  console.log(playRound())
     //  console.log(playRound())
     //  console.log(playRound())
     //  console.log(playRound())

 }

 //  // console.log(playRound('Scissors'));
 //  // console.log(playRound('paper'));
 //  // console.log(playRound('rock'));
 //  console.log(game())