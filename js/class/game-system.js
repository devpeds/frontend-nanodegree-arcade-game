// GameSystem pseudoclass
var GameSystem = function () {
  this.life = {
    sprite: 'images/Heart.png',
    counts: 3
  }
  this.level = {
    current: 1,
    previous: 1
  };
}
// return stage's current level
GameSystem.prototype.getLevel = function() {
  return this.level.current;
}
// reduce life when player die
GameSystem.prototype.playerDie = function () {
  this.life.counts -= 1;
};
// check whether game is over
GameSystem.prototype.isGameOver = function () {
  return this.life.counts === -1;
};
// reset player's life and stage level
GameSystem.prototype.reset = function () {
  this.life.counts = 3;
  this.level.current = 1;
  this.level.previous = 1;
};
GameSystem.prototype.levelUp = function () {
  this.level.previous = this.level.current;
};
// check whether level is up
GameSystem.prototype.isLevelChange = function () {
  return this.level.current !== this.level.previous;
};
// update game level
GameSystem.prototype.update = function () {
  this.level.current += 1;
};
// render score board
GameSystem.prototype.render = function () {
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, 505, 50);
  ctx.fillStyle = 'black';
  ctx.font = '36px Impact';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  ctx.fillText('Life : '+this.life.counts, 0,0);
  ctx.fillText('Lv : '+this.level.current, 400,0);
};
