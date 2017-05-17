// Enemies our player must avoid
var Enemy = function(row) {
    this.sprite = 'images/enemy-bug.png';
    this.rows = { 1: 220, 2: 140, 3: 60 };
    this.x = 0;
    this.y = this.rows[row ? row : parseInt(Math.random()*3)];
    this.speed = (Math.random()+1)*150;
};

Enemy.prototype.getPosition = function() {
  return { x: this.x, y: this.y };
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x += dt*this.speed;
    if(this.x > 500) {
      this.x = 0;
      this.y = this.rows[parseInt(Math.random()*3)];
      this.speed = (Math.random()+1)*150;
    }
};
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
