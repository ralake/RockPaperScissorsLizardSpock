function Player(name) {
  this.name = name;
  this.timesPlayed = [];
};

Player.prototype.picks = function(pick) {
  this.pick = pick
  this.timesPlayed.push(pick);
};

Player.prototype.randomPick = function() {
  var computerPicks = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  this.pick = computerPicks[Math.floor(Math.random() * computerPicks.length)];
  // chang computerPicks to be hash keys of pairs 
};

Player.prototype.pickCount = function() {
  return this.timesPlayed.length
};

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};

Game.prototype.pairs = {
                 rock: { scissors: 'smashes', lizard: 'squashes' },
             scissors: { paper: 'cuts', lizard: 'slices' },
                paper: { rock: 'covers', spock: 'disproves' },
                spock: { scissors: 'smashes' , rock: 'vaporises' },
               lizard: { spock: 'poisons', paper: 'eats' }
};

Game.prototype.winner = function() {
  if(this.player1.pick === this.player2.pick) { return 'Draw!'; }
  
  if (this.pairs[this.player1.pick][this.player2.pick]) {
    return this.player1;
  };
    return this.player2;
};

Game.prototype.loser = function() {
  if (this.winner() === this.player1) {
    return this.player2;
  };
  return this.player1;
};

Game.prototype.victoryMessage = function() {
  if(this.player1.pick === this.player2.pick) { return 'Draw!' }
  else {
    var verb = this.pairs[this.winner().pick][this.loser().pick]
    return (this.winner().name + "'s" + " " + this.winner().pick + " " + verb + " " + this.loser().name + "'s" +  " " + this.loser().pick);
  }
};

  