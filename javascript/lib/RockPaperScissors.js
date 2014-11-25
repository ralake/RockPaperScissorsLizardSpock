function Player(name) {
  this.name = name;
};

Player.prototype.picks = function(first_argument) {
};

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};

Game.prototype.winner = function(first_argument) {
  return this.player1;
};