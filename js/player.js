// Now write your own player class
// player class : update(), render(), handleInput() method.
var Player = function() {
  // image
  this.sprite = 'images/char-boy.png';
  // location
  this.startPosition = { x: 200, y:380 };
  this.x = this.startPosition.x;
  this.y = this.startPosition.y;
  // movement
  this.movement = {
    x: 100,
    y: 80,
    maxX: 400,
    minX: 0,
    maxY: 380,
    minY: 0
  };
};

Player.prototype.isCollision = function(enemy) {
  return (this.x>enemy.x-70 && this.x<enemy.x+70 && this.y===enemy.y);
};
Player.prototype.goStartPosition = function() {
  this.x = this.startPosition.x;
  this.y = this.startPosition.y;
}
Player.prototype.update = function () {
  if(this.y < this.movement.minY) {
    this.goStartPosition();
  }
};
Player.prototype.render = function () {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.handleInput = function (dir) {
  if(dir === 'right') {
    if(this.x < this.movement.maxX) { this.x += this.movement.x; }
  } else if(dir === 'left') {
    if(this.x > this.movement.minX)  { this.x -= this.movement.x; }
  } else if(dir === 'down') {
    if(this.y < this.movement.maxY) { this.y += this.movement.y; }
  } else if(dir === 'up') {
    this.y -= this.movement.y;
  }
};
