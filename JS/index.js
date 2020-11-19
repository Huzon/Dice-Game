function rollDiceRes() {
  var dice1 = document.getElementById("dice1");
  var dice2 = document.getElementById("dice2");

  var roll1 = changingDice(dice1);
  var roll2 =  changingDice(dice2);

  if(roll1>roll2){
      document.getElementById("title").textContent = "Player 1 wins"
  }
  else   if(roll1<roll2){
    document.getElementById("title").textContent = "Player 2 wins"
}
else{
    document.getElementById("title").textContent = "Its a Draw!"
}
}

function rollDice() {
  var roll = Math.floor(Math.random() * 6 + 1);
  console.log("rolling for dice " + roll);
  return roll;
}

function changingDice(dice) {
  var roll = rollDice();
  var diceDot = dice.children;

  for (var i = 0; i < 7; i++) {
    if (roll == 1) {
      if (i != 3) {
        diceDot[i].classList.add("invisible");
      }
    } else if (roll == 2) {
      if (i != 0 && i != 6) {
        diceDot[i].classList.add("invisible");
      }
    } else if (roll == 3) {
      if (i != 0 && i != 3 && i != 6) {
        diceDot[i].classList.add("invisible");
      }
    } else if (roll == 4) {
      if (i == 2 || i == 3 || i == 4) {
        diceDot[i].classList.add("invisible");
      }
    } else if (roll == 5) {
      if (i == 2 || i == 4) {
        diceDot[i].classList.add("invisible");
      }
    }
     else {
      break;
    }
  }

  return roll;
}

function invisibleDot(dots) {
  dots.classList.add("invisible");
}

rollDiceRes();