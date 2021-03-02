buttons = document.querySelectorAll("button");
console.log(buttons)
let playerScore = 0 
let computerScore = 0
buttons.forEach(element => {
    element.addEventListener("click",function(e){
        let playerSelection = e.target.innerHTML;
        console.log(playerSelection);
        let i=Math.floor((Math.random())*buttons.length);
        console.log(i)
        let computerSelection = buttons[i].innerHTML;
        console.log(computerSelection)
        document.getElementById("player-selection").innerHTML=playerSelection
        document.getElementById("computer-selection").innerHTML=computerSelection
        if((playerSelection === 'Rock' && computerSelection === 'Paper') || (playerSelection === 'Paper' && computerSelection === 'Scissors') || (playerSelection === 'Scissors' && computerSelection === 'Rock')){
            document.getElementById("computer-score").innerHTML=parseInt(document.getElementById("computer-score").innerHTML)+1
            document.getElementById("winner").innerHTML="computer won!"
        }
        else if((playerSelection === 'Rock' && computerSelection === 'Scissors') || (playerSelection === 'Paper' && computerSelection === 'Rock') || (playerSelection === 'Scissors' && computerSelection === 'Paper')){
           document.getElementById("player-score").innerHTML=parseInt(document.getElementById("player-score").innerHTML)+1
           document.getElementById("winner").innerHTML="player won!"
        }
        else{
            document.getElementById("winner").innerHTML="It's a tie!"
        }


    })
});