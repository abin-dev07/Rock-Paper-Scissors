
function getComputerChoice(){
    const step = Math.random() *2-1
    if(step<=0){
        return("Rock".toLowerCase())
    }
    else if(step >=0.89){
        return("Paper".toLowerCase())
    }
    else{
        return("Scissors".toLowerCase())
    }
     
}

function getHumanChoice(){
    const step = prompt("Your Move")
    return(step.toLowerCase())
}

function playGame(rounds){
    let humanScore =0;
    let computerScore=0;
    // const humanSelection = getHumanChoice();
    // const computerSelection = getComputerChoice();
    function playRound(humanChoice,computerChoice){
    
        if(humanChoice==computerChoice){
            console.log("Oops! Both are",humanChoice);
            humanScore+=0;
            computerScore+=0;
            console.log("The HumanScore:",humanScore,"The Machine Score:",computerScore)
        }
        else if(humanChoice=="rock" && computerChoice=="scissors"){
            console.log("Rock beats Scissors")
            humanScore+=1;
            console.log("The HumanScore:",humanScore,"The Machine Score:",computerScore)
        }
        else if(humanChoice=="rock" && computerChoice=="paper"){
            console.log("Paper beats Rock")
            computerScore+=1;
            console.log("The HumanScore:",humanScore,"The Machine Score:",computerScore)
        }
        else if(humanChoice=="paper" && computerChoice=="rock"){
            console.log("paper beats Rock")
            computerScore+=1
            console.log("The HumanScore:",humanScore,"The Machine Score:",computerScore)
        }
        else if(humanChoice=="paper" && computerChoice=="scissors"){
            console.log("Scissors beats Paper")
            computerScore+=1;
            console.log("The HumanScore:",humanScore,"The Machine Score:",computerScore)
        }
        else if(humanChoice=="scissors" && computerChoice=="Rock"){
            console.log("Rock beats Scissors")
            computerScore+=1;
            console.log("The HumanScore:",humanScore,"The Machine Score:",computerScore)
        }
        else if(humanChoice=="scissors" && computerChoice=="paper"){
            console.log("Scissors beats paper")
            humanScore+=1;
            console.log("The HumanScore:",humanScore,"The Machine Score:",computerScore)

        }else{
            console.log("The Human entered an Invalid Input, You lost your chance :)")
        }
    }

    for(i =0;i<rounds;i++){
        
        playRound(getHumanChoice(), getComputerChoice());
    }
    if(humanScore>computerScore){
        console.log("Human Won the GAME!!! Score: ",humanScore,"Machine Score: ",computerScore)
    }
    else{
        console.log("Machine Won the GAME!!! Score:",computerScore,"HumanScore :",humanScore)
    }

}

playGame(5)





