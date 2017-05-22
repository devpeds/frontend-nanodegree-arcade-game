// Character class for user to select one of given images
var Character = function() {
  // images
  this.sprite = {
    boy: 'images/char-boy.png',
    cat: 'images/char-cat-girl.png',
    horn: 'images/char-horn-girl.png',
    pink: 'images/char-pink-girl.png',
    princess: 'images/char-princess-girl.png'
  };
};

Character.prototype.getSprite = function(name) {
  return this.sprite[name];
}
