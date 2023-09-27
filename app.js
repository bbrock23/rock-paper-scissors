const choices = ['rock', 'paper', 'scissors']; 
let playerScore=0;  
let computerScore=0; 
let ties = 0; 
//const computerSelection = getComputerChoice(); 
//const playerSelection = prompt('Type rock, paper, or scissors.').toLowerCase();  


// get computer choice 

function getComputerChoice(){
    return choices[Math.floor(Math.random()*choices.length)]
}


//console.log(computerSelection); 
//console.log(playerSelection); 

//play one round of the game 



//function playRound(playerSelection, computerSelection){
function playRound(){
   const playerSelection = prompt('Type rock, paper, or scissors.').toLowerCase(); 
   console.log('Player chooses: ' + playerSelection); 
   const computerSelection = getComputerChoice(); 
   console.log('Computer chooses: ' + computerSelection); 
   if (playerSelection === computerSelection){
        console.log('Tie')
        ties += 1;
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
                (playerSelection === 'paper' && computerSelection === 'rock') ||
                (playerSelection === 'scissors' && computerSelection === 'paper')){
                    console.log('Player Wins!')
                    playerScore += 1;
                } else {
                    console.log('Computer Wins')
                    computerScore += 1; 
                }
  
} 

function game(){
    playRound(); 
    console.log(' '); 
    playRound();
    console.log(' ');  
    playRound(); 
    console.log(' '); 
    playRound(); 
    console.log(' '); 
   playRound();
   console.log(' '); 
   console.log('****Final Results****'); 
   console.log('Ties:', (ties)); 
   console.log('Player Score:', (playerScore));
   console.log('Computer Score:',(computerScore)); 
   if (playerScore > computerScore){
    console.log('Player Win!'); 
   } else if ( playerScore === computerScore){
    console.log('Tie'); 
   } else {
    console.log('Computer Wins'); 
   }
}
game();
 /*why does the game function output the results when console.log is used but when 
 the function is called in another function, it just returns the computer and user selection? */
 
//console.log(game()); 
//record outcome and keep an ongoing tally system
// next up: playing the game 5 times 