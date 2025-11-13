'use strict';

const btnNew = document.querySelector('.btn-newGame');
const btnRoll = document.querySelector('.btn-rollDice');
const btnHold = document.querySelector('.btn-hold');
const currentScore = document.querySelector('.currentScore');
const totalScore = document.querySelector('.totalScore');
const currentScore1 = document.querySelector('.score-p1');
const currentScore2 = document.querySelector('.score-p2');
const totalScore1 = document.querySelector('.totalScore-p1');
const totalScore2 = document.querySelector('.totalScore-p2');
const diceIMG = document.querySelector('.img');

// btnRoll = Math.trunc(Math.random() * 6) + 1;
btnRoll.addEventListener('click', function () {
  if (playing) {
    diceIMG = Math.trunc(Math.random() * 6) + 1;
  }
});
