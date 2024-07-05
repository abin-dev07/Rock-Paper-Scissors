let humanScore =0;
let computerScore=0;

const btns = document.querySelectorAll("button");

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


for (const btn of btns){
    btn.addEventListener("click", (e) => {
        playerChoice = btn.innerHTML
        gameHandle(playerChoice.toLowerCase())
    })
}


function gameHandle(userchoice){
    if(humanScore >= 5 || computerScore >= 5 ){

        if(humanScore==5){
            setTimeout(3000)
            alert("WooHoo You Won :) \nReady For the Next Round")
            humanScore=0;
            computerScore=0
            document.getElementById("score").innerHTML=""
            document.getElementById("notifications").innerHTML=""
        }else{
            alert("Ohh Nooo You Lost :( \nChill Buddy Try Again")
            humanScore=0;
            computerScore=0
            document.getElementById("score").innerHTML=""
            document.getElementById("notifications").innerHTML=""
        }
        console.log("Need to start again")
        

    }else{
        let computerChoice = getComputerChoice();
        playRound(userchoice,computerChoice);
    }
    
}
function playRound(humanChoice,computerChoice){

    notificationMsg=""
    scoreString=""
    resultMsg=""
    if(humanScore>=5){
        scoreString=   `Your Score: ${humanScore} The Machine Score:${computerScore}`
        document.getElementById("score").innerHTML=scoreString;
        resultMsg="Woo Hoo !! You Won :)"
        document.getElementById("result").innerHTML-resultMsg;
    }
    else if(humanScore>=5){
        scoreString=   `Your Score: ${humanScore} The Machine Score:${computerScore}`
        document.getElementById("score").innerHTML=scoreString;
        resultMsg="Ohh Nooo..... Machine Won :)"
        document.getElementById("result").innerHTML-resultMsg;
    }

    else if(humanChoice==computerChoice){
        notificationMsg=`Oops! You Both choosen,${humanChoice}`
        document.getElementById("notifications").innerHTML=notificationMsg
        humanScore+=0;
        computerScore+=0;
        scoreString=   `Your Score: ${humanScore} The Machine Score:${computerScore}`
        document.getElementById("score").innerHTML=scoreString;
    }
    else if(humanChoice=="rock" && computerChoice=="scissors"){
        notificationMsg="Rock beats Scissors"
        document.getElementById("notifications").innerHTML=notificationMsg
        humanScore+=1;
        scoreString=   `Your Score: ${humanScore} The Machine Score:${computerScore}`
        document.getElementById("score").innerHTML=scoreString;
    }
    else if(humanChoice=="rock" && computerChoice=="paper"){
        notificationMsg="Paper beats Rocks"
        document.getElementById("notifications").innerHTML=notificationMsg
        computerScore+=1;
        scoreString=   `Your Score: ${humanScore} The Machine Score:${computerScore}`
        document.getElementById("score").innerHTML=scoreString;
    }
    else if(humanChoice=="paper" && computerChoice=="rock"){
        notificationMsg="Paper beats Rocks"
        document.getElementById("notifications").innerHTML=notificationMsg
        humanScore+=1
        scoreString=   `Your Score: ${humanScore} The Machine Score:${computerScore}`
        document.getElementById("score").innerHTML=scoreString;
    }
    else if(humanChoice=="paper" && computerChoice=="scissors"){
        notificationMsg="Scissors beats Paper"
        document.getElementById("notifications").innerHTML=notificationMsg
        computerScore+=1;
        scoreString=   `Your Score : ${humanScore} The Machine Score :${computerScore}`
        document.getElementById("score").innerHTML=scoreString;
    }
    else if(humanChoice=="scissors" && computerChoice=="rock"){
        notificationMsg="Rock beats Scissors"
        document.getElementById("notifications").innerHTML=notificationMsg
        computerScore+=1;
        scoreString=   `Your Score: ${humanScore} The Machine Score:${computerScore}`
        document.getElementById("score").innerHTML=scoreString;
    }
    else if(humanChoice=="scissors" && computerChoice=="paper"){
        notificationMsg="Scissors beats paper"
        document.getElementById("notifications").innerHTML=notificationMsg
        humanScore+=1;
        scoreString=   `Your Score: ${humanScore} The Machine Score:${computerScore}`
        document.getElementById("score").innerHTML=scoreString;

    }else{
        console.log("The Human entered an Invalid Input, You lost your chance :)")
    }
}

