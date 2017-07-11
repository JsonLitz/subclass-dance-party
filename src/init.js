$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    console.log(window)
    var dancer =  dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('.dancers').append(dancer.$node);
  });

});
var makeBlinkyDancer = (top, left, timeBetweenSteps) => {
  return new BlinkyDancer(top, left, timeBetweenSteps)
};
var makeGifDancer = (top, left, timeBetweenSteps) => {
  return new GifDancer(top, left, timeBetweenSteps)
}
