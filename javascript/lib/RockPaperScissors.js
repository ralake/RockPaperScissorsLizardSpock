function Player(name) {
  this.name = name;
};

Player.prototype.picks = function(pick) {
  var pick = pick
};

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};

Game.prototype.winner = function(player1, player2) {
  var PAIRS = { 'rock' : 'scissors',
            'scissors' : 'paper',
               'paper' : 'rock' };
  if (PAIRS[this.player1.pick] == this.player2.pick) {
  return this.player1;
  };
};