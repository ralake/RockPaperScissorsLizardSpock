function Player(name) {
  this.name = name;
};

Player.prototype.picks = function(pick) {
  this.pick = pick
};

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};

Game.prototype.pairs = {
                 'rock' : { 'scissors' : 'smashes', 'lizard' : 'squashes' },
             'scissors' : { 'paper' : 'cuts', 'lizard' : 'slices' },
                'paper' : { 'rock' : 'covers', 'spock' : 'disproves' },
                'spock' : { 'scissors' : 'smashes' , 'rock' : 'vaporises' },
               'lizard' : { 'spock' : 'poisons', 'paper' : 'eats' }
};

Game.prototype.winner = function() {
  if(this.player1.pick === this.player2.pick) { return null; }
  
  if (this.pairs[this.player1.pick][this.player2.pick]) {
    return this.player1;
  };
    return this.player2;
};
