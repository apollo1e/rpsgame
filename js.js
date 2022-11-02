let computerChoice =["rock","paper","scissors"];
let computerChoose;
let computerSelection = computerChoose; 
let scoreP=0;
let scoreC=0;

const btn1 = document.getElementById('rockbtn');
const btn2 = document.getElementById('paperbtn');
const btn3 = document.getElementById('scissorsbtn');


let playerChoices = document.querySelectorAll("button");

const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");


const getComputerChoice = () =>  {
  
    let i=0;
    i= Math.floor(Math.random()*computerChoice.length);
    return computerChoose= computerChoice[i];

    
};
// getComputerChoice();


 // console.log("computer choose: "+ computerChoose);




// let playerSelection = 'rock';
// const getPlayerchoice = () =>{
   
//    for (let i=0; i <1; i++){
//     do {
//         let playerChoose = prompt("choose rock paper or scissors"); }
//     while ((playerChoose.toLowerCase() !== 'rock') || (playerChoose.toLowerCase() !== 'paper')|| (playerChoose.toLowerCase() !== 'scissors')) {
//         alert("please key in a valid selection !");
 
//    }
   

// } 

// getPlayerchoice();

function playRound (playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection){
        console.log("----------------");
        console.log(`player choose: ${playerSelection}`);
        console.log(`computer choose: ${computerChoose}`);
        console.log("tie");
        console.log("----------------");
          
         
    }
        
    else if ((playerSelection==='rock' && computerSelection==='paper') || (playerSelection==='paper' && computerSelection==='scissors') || (playerSelection==='scissors' && computerSelection==='rock')){
        console.log("----------------");
        console.log(`player choose: ${playerSelection}`);
        console.log(`computer choose: ${computerChoose}`);
         console.log("You lose!");
         console.log("----------------");
         scoreC++;
         computerScore.innerHTML = `COMPUTER SCORE: ${scoreC}`;
    }
    else {
        console.log("----------------");
        console.log(`player choose: ${playerSelection}`);
        console.log(`computer choose: ${computerChoose}`);
        console.log("you win!");
        console.log("----------------");
        scoreP++;
        playerScore.innerHTML = `PLAYER SCORE: ${scoreP}`;
    }

    return scoreP, scoreC; 

    // else if(playerSelection=='rock' && computerSelection=='scissors'){

    //     return console.log("You win!, scissors beats rock");
    // }
    // // else {
    // //     return console.log("Tie!");
    // }
    
    
};

btn1.addEventListener('click', () => {
    getComputerChoice();
    console.log(`computer picked : ${computerChoose}`);
    playerSelection ='rock';
    playRound(playerSelection, computerChoose);
})

btn2.addEventListener('click', () => {
    getComputerChoice();
    console.log(`computer picked : ${computerChoose}`);
    playerSelection ='paper';
    playRound(playerSelection, computerChoose);
})

btn3.addEventListener('click', () => {
    getComputerChoice();
    console.log(`computer picked : ${computerChoose}`);
    playerSelection ='scissors';
    playRound(playerSelection, computerChoose);
})


 

// playRound(playerSelection, computerSelection);



// function game(){
//     // for (i=0;i<5;i++){
//         let round=0+i;
//         console.log(`ROUND ${round+1}`);
//         playRound(playerSelection, computerSelection);
        
//     // }
//     return scoreC, scoreP;
    

// }

// function start(){
//     for (i=0;i<5;i++){
//         game();
//     };
// } ;

// start();


// const choicebtns = document.querySelectorAll(".btn-selections");

// choicebtns.addEventListener('click', e => {
//     if (e=== btn1){
//         playRound('rock', computerSelection);
//     }
//     if (e=== btn2){
//         playRound('paper', computerSelection);
//     }
//     if (e=== btn3){
//         playRound('scissors', computerSelection);
//     }
    
// });




 