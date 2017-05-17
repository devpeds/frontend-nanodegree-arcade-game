// Now instantiate your objects.
var allEnemies = [new Enemy(1),
                  new Enemy(2),
                  new Enemy(3),
                  ],
    player = new Player();

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
