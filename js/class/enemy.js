// Enemies our player must avoid
var Enemy = function(row) {
    this.sprite = 'images/enemy-bug.png';
    this.random = {
      getX: function() { return Math.random()*500; },
      getY: function(row) { return 70 + 80*(row ? row-1 : parseInt(Math.random()*10)%4); },
      speed: function() { return 30 + Math.random()*170; }
    }
    this.location = { x: this.random.getX(), y: this.random.getY(row) }
    this.speed = this.random.speed();
};
// Get the position of Enemy for check whether it collide with player.
Enemy.prototype.getPosition = function() {
  return this.location;
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.location.x += dt*this.speed;
    if(this.location.x > 500) {
      this.location = {
        x: 0,
        y: this.random.getY()
      }
      this.speed = this.random.speed();
    }
};
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.location.x, this.location.y);
};
