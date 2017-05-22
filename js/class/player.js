// Now write your own player class
// player class : update(), render(), handleInput() method.
var Player = function(character) {
  // image
  this.sprite = character.getSprite("boy");
  // location
  this.startPosition = { x: 200, y: 390 };
  this.x = this.startPosition.x;
  this.y = this.startPosition.y;
  // movement
  this.movement = {
    x: 100,
    y: 80,
    maxX: 400,
    minX: 0,
    maxY: 380,
    minY: -10
  };
};
// check player to collide with enemies
Player.prototype.isCollision = function(position) {
  return (
    this.x > position.x - 70 &&
    this.x < position.x + 70 &&
    this.y === position.y
  );
};
// send player start position when he get level-up or die
Player.prototype.goStartPosition = function() {
  this.x = this.startPosition.x;
  this.y = this.startPosition.y;
};
// check player succeed arriving at the goal
Player.prototype.isSuccess = function () {
  return this.y < this.movement.minY;
};
// update player status
// Player.prototype.update = function () {
//   this.goStartPosition();
// };
// render player image, life and level information.
Player.prototype.render = function () {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// move player
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
