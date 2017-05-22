// Now instantiate your objects.
var gameSystem = new GameSystem(),
    allEnemies = [new Enemy(1),
                  new Enemy(2),
                  new Enemy(3),
                  new Enemy(4)
                  ],
    player = new Player(new Character());

(function() {
  // This listens for key presses and sends the keys to your
  // Player.handleInput() method. You don't need to modify this.
  document.addEventListener('keyup', function(e) {
      var allowedKeys = {
          37: 'left',
          38: 'up',
          39: 'right',
          40: 'down'
      };

      player.handleInput(allowedKeys[e.keyCode]);
  });
})()
