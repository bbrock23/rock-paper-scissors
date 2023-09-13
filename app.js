const choices = ['rock', 'paper', 'scissors']; 
const computerSelection = getComputerChoice(); 
const playerSelection = prompt('Type rock, paper, or scissors.');  
//const playerSelection = "rock"; 

// get computer choice 

function getComputerChoice(){
    return choices[Math.floor(Math.random()*choices.length)]
}

//function getUserChoice(){
//}   

console.log(computerSelection); 
console.log(playerSelection); 

//play one round of the game 
function playRound(playerSelection, computerSelection){
    //let playerSelection = prompt('Type rock, paper, or scissors.').toLowerCase();
    if (playerSelection === computerSelection){
        return 'Tie';
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
                (playerSelection === 'paper' && computerSelection === 'rock') ||
                (playerSelection === 'scissors' && computerSelection === 'paper')){
                    return 'Player Wins!';
                } else {
                    return 'Computer Wins'; 
                }
}
//console.log(playRound(playerSelection, computerSelection)); 


function game(){
   return playRound(playerSelection, computerSelection);

}


console.log(game()); 
//record outcome and keep an ongoing tally system
// next up: playing the game 5 times 