/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var scores, roundScore, activePlayer, gamePlaying;
init();

//Event handler
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (gamePlaying) {
    // 1. Random number

    var dice = Math.floor(Math.random() * 6) + 1;
    //var dice1 = Math.floor(Math.random()*6)+1;

    // 2. Display the result
    var diceDOM = document.querySelector(".dice");
    //var diceDOM1 = document.querySelector('.dice1');

    diceDOM.style.display = "block";
    //diceDOM1.style.display = "block";

    diceDOM.src =
      "C:/Users/aman/Desktop/javascript/pigGame/dice-" + dice + ".png";
    //diceDOM1.src = "C:/Users/aman/Desktop/javascript/dice-"+dice1+".png";

    // 3.update the round score
    //   if the rolled number was not a 1

    if (dice !== 1) {
      //Add score
      roundScore += dice;
      document.querySelector(
        "#current-" + activePlayer
      ).textContent = roundScore;
    } else {
      //make the round score 0
      roundScore = 0;
      nextPlayer();
    }
  }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
  if (gamePlaying) {
    // add roundscore to global score
    scores[activePlayer] += roundScore;

    //update user interface
    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];
    roundScore = 0;
    document.querySelector("#current-" + activePlayer).textContent = roundScore;

    //check if the player won the game
    if (scores[activePlayer] >= 20) {
      document.querySelector("#name-" + activePlayer).textContent = "Winner!";
      document.querySelector(".dice").style.display = "none";
      //document.querySelector('.dice1').style.display = 'none';

      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      gamePlaying = false;
    } else {
      //next player turn
      nextPlayer();
    }
  }
});

function nextPlayer() {
  roundScore = 0;
  document.querySelector("#current-" + activePlayer).textContent = roundScore;

  if (activePlayer === 0) {
    document.querySelector(".player-0-panel").classList.toggle("active");
    activePlayer = 1;
    document.querySelector(".player-1-panel").classList.toggle("active");
  } else {
    document.querySelector(".player-1-panel").classList.toggle("active");
    activePlayer = 0;
    document.querySelector(".player-0-panel").classList.toggle("active");
  }
  document.querySelector(".dice").style.display = "none";
}

//new game
document.querySelector(".btn-new").addEventListener("click", init);

//init

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  document.querySelector(".dice").style.display = "none";
  //document.querySelector('.dice1').style.display = 'none';

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}
