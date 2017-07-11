//chubbyDancer.js is a new dancer class that is like blinkyDancer but bigger
class ChubbyDancer extends BlinkyDancer{
  // constructor (){
  //   // super.constructor();
  // }
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node.css('border-width', 20);
  }
}
