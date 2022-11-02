let computerChoice =["rock","paper","scissors"];
let computerChoose;
const computerSelection = computerChoose; 
let scoreP=0;
let scoreC=0;


const getComputerChoice = () =>  {
  
    let i=0;
    i= Math.floor(Math.random()*computerChoice.length);
    return computerChoose= computerChoice[i];
    
};
getComputerChoice();

console.log(`computer picked : ${computerChoose}`);   // console.log("computer choose: "+ computerChoose);




let playerSelection = 'rock';
// const getPlayerchoice = () =>{
   
//    for (let i=0; i <1; i++){
//     do {
//         let playerChoose = prompt("choose rock paper or scissors"); }
//     while ((playerChoose.toLowerCase() !== 'rock') || (playerChoose.toLowerCase() !== 'paper')|| (playerChoose.toLowerCase() !== 'scissors')) {
//         alert("please key in a valid selection !");
 
//    }
   

// } 

// getPlayerchoice();
console.log("player chooses: " +playerSelection);


 
function playRound (playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection){
         console.log("tie");
          
         
    }
        
    else if ((playerSelection==='rock' && computerSelection==='paper') || (playerSelection==='paper' && computerSelection==='scissors') || (playerSelection==='scissors' && computerSelection==='rock')){

         console.log("You lose!");
        return scoreC++;
    }
    else {
        console.log("you win!");
        return scoreP++;
    }
    // else if(playerSelection=='rock' && computerSelection=='scissors'){

    //     return console.log("You win!, scissors beats rock");
    // }
    // // else {
    // //     return console.log("Tie!");
    // }
    
    
};

// playRound(playerSelection, computerSelection);



function game(){
    // for (i=0;i<5;i++){
        let round=0+i;
        console.log(`ROUND ${round+1}`);
        playRound(playerSelection, computerSelection);
        
    // }
    return scoreC, scoreP;
    

}

function start(){
    for (i=0;i<5;i++){
        game();
    };
} ;

start();

const btn1 = document.getElementById('rockbtn');
const btn2 = document.getElementById('paperbtn');
const btn3 = document.getElementById('scissorsbtn');

let playerChoices = document.querySelectorAll("button");

playerChoices.addEventListener('click', e => {
    if (e=== btn1){
        
    }
})

btn1.addEventListener('click', () => {
    playRound(playerSelection, computerSelection);
})

btn2.addEventListener('click', () => {
    playRound(playerSelection, computerSelection);
})

btn3.addEventListener('click', () => {
    playRound(playerSelection, computerSelection);
})

const choicebtns = document.querySelectorAll(".btn-selections");
 