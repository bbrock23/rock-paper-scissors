const choices = ['rock', 'paper', 'scissors']; 
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
        return 'Tie';
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
                (playerSelection === 'paper' && computerSelection === 'rock') ||
                (playerSelection === 'scissors' && computerSelection === 'paper')){
                    return 'Player Wins!';
                } else {
                    return 'Computer Wins'; 
                }

} 

function game(){
 console.log(playRound()); 
 console.log('****************************************')
 console.log(playRound()); 
 console.log('****************************************')
 console.log(playRound()); 
 console.log('****************************************')
 console.log(playRound()); 
 console.log('****************************************')
console.log(playRound()); 
} 
game(); 
/*function game(){
    playRound();  
    playRound(); 
    playRound(); 
    playRound(); 
   playRound();
}
game();
 why does the game function output the results when console.log is used but when 
 the function is called in another function, it just returns the computer and user selection? */
 
//console.log(game()); 
//record outcome and keep an ongoing tally system
// next up: playing the game 5 times 