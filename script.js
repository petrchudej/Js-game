// basic variables
var totalScore, roundScore, activePlayer, dice, playGame;

newStart();

function newStart(){
    totalScore = [0,0];
    roundScore = 0;
    activePlayer = 0;
    playGame = true;

// reset and remove the dice
document.getElementById("totalScorePlayer-0").textContent = 0;
document.getElementById("totalScorePlayer-1").textContent = 0;
document.getElementById("currentScore-0").textContent = 0;
document.getElementById("currentScore-1").textContent = 0;

document.querySelector(".diceImage").style.display = "none";

document.querySelector("#name-0").textContent = "Score 1. player";
document.querySelector("#name-1").textContent = "Score 2. player";

 document.querySelector(".totalScore0").classList.add("active");
 document.querySelector(".totalScore1").classList.remove("active");

}

document.querySelector(".rollDice").addEventListener("click",function(){
    if(playGame){
        // 1. Generate random number between 1 and 6. 
        var dice = Math.ceil(Math.random()*6);
        // Display right image
        var diceElement = document.querySelector(".diceImage");
        diceElement.style.display = "block";
        console.log(diceElement.src="images/" + dice + ".jpg");
        // Addition score
        if (dice !== 1){
            roundScore = roundScore + dice;
            document.getElementById("currentScore-" + activePlayer).textContent = roundScore; 
        } else {
            nextPlayer();
        } 
    }  
});

function nextPlayer(){
    if (activePlayer === 0){
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    roundScore = 0;
    document.getElementById("currentScore-0").textContent = 0;
    document.getElementById("currentScore-1").textContent = 0;
    document.querySelector(".diceImage").style.display = "none";

    document.querySelector(".totalScore0").classList.toggle("active");
    document.querySelector(".totalScore1").classList.toggle("active");
}

document.querySelector(".holdScore").addEventListener("click",function(){
    if(playGame){
        // Fill score of player 
        totalScore[activePlayer] = totalScore[activePlayer] + roundScore;
        //
        document.querySelector("#totalScorePlayer-" + activePlayer).textContent = totalScore[activePlayer];

        if(totalScore[activePlayer] >= 20){
            document.querySelector("#name-" + activePlayer).textContent = "Winner!";
            document.querySelector(".diceImage").style.display = "none";
            playGame = false;
        } else {
            nextPlayer();
        }
    }
});

document.querySelector(".newGame").addEventListener("click", newStart);