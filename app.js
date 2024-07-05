let humanScore =0;
let computerScore=0;

const btns = document.querySelectorAll("button");

// Function: To generate Random option by Machine
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

// EVENT HANADLING  

for (const btn of btns){
    btn.addEventListener("click", (e) => {
        playerChoice = btn.innerHTML
        if(humanScore<=5 && computerScore <=5){
            gameHandle(playerChoice.toLowerCase())
            // counter()
        }
        
    })
}


function gameHandle(userchoice){
    if(humanScore<=5 && computerScore <=5){
        let computerChoice = getComputerChoice();
        playRound(userchoice,computerChoice);
    }
    
}
function playRound(humanChoice,computerChoice){

    notificationMsg=""
    scoreString=""
    resultMsg=""
    if(humanScore==5){
        scoreString=   `Your Score: ${humanScore} The Machine Score:${computerScore}`
        document.getElementById("score").innerHTML=scoreString;
        resultMsg="Woo Hoo !! You Won :)"
        console.log(resultMsg,"FROM HUMAN")
        document.getElementById("result").innerHTML=resultMsg;
        // Next Round
        setTimeout(()=>{
            humanScore=0;
            computerScore=0
            document.getElementById("score").innerHTML="";
            document.getElementById("notifications").innerHTML="";
            document.getElementById("result").innerHTML="";
            console.log("Need to start again")
            // alert("WooHoo You Won :) \nReady For the Next Round");
        },2000)
    }
    else if(computerScore==5){
        scoreString=   `Your Score: ${humanScore} The Machine Score:${computerScore}`
        document.getElementById("score").innerHTML=scoreString;
        resultMsg="Ohh Nooo..... Machine Won :)"
        document.getElementById("result").innerHTML=resultMsg;
        console.log(resultMsg,"FROM COMP")
        // Reset Game
        
        setTimeout(()=>{
            humanScore=0;
            computerScore=0
            document.getElementById("score").innerHTML="";
            document.getElementById("notifications").innerHTML="";
            document.getElementById("result").innerHTML="";
            console.log("Need to start again")
            // alert("Ohh Nooo You Lost :( \nChill Buddy Try Again");
        },2000)
        
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

