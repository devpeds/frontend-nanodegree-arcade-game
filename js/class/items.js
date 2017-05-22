// Items class
var Items = function() {
  // images
  this.sprite = {
    gem: {
      blue: 'images/Gem Blue.png',
      green: 'images/Gem Green.png',
      orange: 'images/Gem Orange.png'
    },
    heart: 'images/Heart.png',
    key: 'images/Key.png',
    star: 'images/Star.png'
  };
  // location
  this.location = { x: 0, y: 0 };
};

Items.prototype.getSprite = function(name, color) {
  if (name === 'gem') {
    return this.sprite.gem[color];
  }
  return this.sprite[name];
};
