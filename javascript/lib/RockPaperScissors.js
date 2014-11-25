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
                 'rock' : { 'beats' : 'scissors', 'alsoBeats' : 'lizard' },
             'scissors' : { 'beats' : 'paper' , 'alsoBeats' : 'lizard' },
                'paper' : { 'beats' : 'rock', 'alsoBeats' : 'spock' },
                'spock' : { 'beats' : 'scissors' , 'alsoBeats' : 'rock' },
               'lizard' : { 'beats' : 'spock', 'alsoBeats' : 'paper' }
};

Game.prototype.winner = function() {

if(this.player1.pick === this.player2.pick) { return null; }

  if (this.pairs[this.player1.pick]['beats'] === this.player2.pick || 
    this.pairs[this.player1.pick]['alsoBeats']  === this.player2.pick) {
    return this.player1;
  };
    return this.player2;
};
