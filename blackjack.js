/*
Function calculates number multiple of 5's blackjack payout.

type 'node blackjack.js' to see the results.
*/

let bet = Math.ceil(Math.random() * 100) * 5;

blackJackPayout = () => {
  let blackJack = bet / 2 + bet;
  let response = "The Blackjack of " + bet + " is " + blackJack;

  return response;
};

console.log(blackJackPayout());
