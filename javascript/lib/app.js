$(document).ready(function(){
  var Bleasey = new Player('Bleasey');
  var Lakey = new Player('Lakey');
  var game = new Game(Bleasey, Lakey);

  var remove = function (){
    $(this).remove();
  };

  var rendered = function(game){
    var html = $('#list-item-template').html();
    var data = {message: game.victoryMessage()};
    return Mustache.render(html, data);
  };

  var makePicks = function (pick){
    Bleasey.picks(pick);
    Lakey.randomPick();
  };

  $('.choices img').on('click', function(){
    makePicks($(this).data('pick'));
    $(rendered(game)).prependTo('#results').slideDown(1000);
    $('li:nth-child(5)').fadeOut(1000,remove);
  });

});