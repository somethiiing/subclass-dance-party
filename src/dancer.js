var makeDancer = function(top, left, timeBetweenSteps, node) {
  this.$node = $(node);
  this.left = left;
  this.top = top;
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};

makeDancer.prototype.step = function () {
  setTimeout(this.step, this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};