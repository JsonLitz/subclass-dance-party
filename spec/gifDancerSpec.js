describe('gifDancer', function() {

  var gifDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    gifDancer = makeGifDancer(20, 30, timeBetweenSteps)
  });

  it('should have a jQuery $node object', function() {
    expect(gifDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(gifDancer.$node, 'toggle');
    gifDancer.step();
    expect(gifDancer.$node.toggle.called).to.be.true;
  });

  it('should have a function that creates a chubbyDancer', function() {
    expect(gifDancer.$node.toggle.called)to.be.true;
  })
  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(gifDancer, 'step');
      expect(gifDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      // clock.tick(timeBetweenSteps);
      expect(gifDancer.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps);
      expect(gifDancer.step.callCount).to.be.equal(2);
    });
  });
});
