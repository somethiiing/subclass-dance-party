var makeJumpingDancer = function(top, left, timeBetweenSteps, node) {
  makeDancer.call(this, top, left, timeBetweenSteps,node);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};
makeJumpingDancer.prototype = Object.create(makeDancer.prototype);
makeJumpingDancer.prototype.constructor = makeJumpingDancer;
makeJumpingDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.fadeToggle();
};
