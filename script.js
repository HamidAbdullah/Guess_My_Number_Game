"use strict";
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "🎉 Correct Number!";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// //  Input Field
// console.log(document.querySelector(".guess").value);
// document.querySelector(".guess").value = 23;
// const x = function () {
//   console.log(23);
// };
//  Create Secerte Number>

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector(".number").textContent = secretNumber;
let score = 20;
let highScores = 0;

//  Event Select On click
document.querySelector(".check").addEventListener("click", function () {
  //Converte String Number To Integer Number
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  //  Comapare The Secrete Number
  //  For Null :- empty
  if (!guess) {
    document.querySelector(".message").textContent = "⛔No Number";
  }

  //  Condition is true
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent =
      "Oh Yeah Correct Number🎉🥇";
    document.querySelector(".number").textContent = secretNumber;

    //    If Condition Is True Then We Change The BackGround Color
    //    Black To Green .
    document.querySelector("body").style.backgroundColor = "#60b347";
    //   And Also Change The width Of Number 15rm to 30rm.
    document.querySelector(".number").style.width = "26rem";

    if (score > highScores) {
      highScores = score;
      document.querySelector(".highscore").textContent = highScores;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "😁Too High!";
      score = score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😒You Lost The Game!";
    }
  }
  // Guess Number Is Smaller Then Secrete Number So, This Condition is  True
  else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "😔Too Low!";
    score--;
    document.querySelector(".score").textContent = score;
  }
});

//  Again Or Game Reset Button

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start Guessing....";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").textContent = " ";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "25rem";
});
