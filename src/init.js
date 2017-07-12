$(document).ready(function() {
  window.dancers = [];
  window.rightHalf = [];
  window.leftHalf = [];
  window.midPoint;

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // console.log(window)
    var dancer =  dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('.dancers').append(dancer.$node);
    window.dancers.push(dancer)
  });

  $('.goCrazy').on('click', function(event){
    window.midPoint = Math.floor(window.dancers.length / 2);
    window.rightHalf = window.dancers.slice(midPoint)
    window.leftHalf = window.dancers.slice(0, midPoint)
    window.dancers.forEach((item, index)=>{
      let styleProperties = (index%2===0) ? {left : '90%'} : {left : '5%'};
      item.$node.animate(styleProperties, 1250);
    })
  })

  $('.danceOff').on('click', function(event) {
    console.log(window.dancers[1].$node.css("left"))
    window.dancers[1].stepCenter()
  });

});
var makeBlinkyDancer = (top, left, timeBetweenSteps) => {
  return new BlinkyDancer(top, left, timeBetweenSteps)
};
var makeGifDancer = (top, left, timeBetweenSteps) => {
  return new GifDancer(top, left, timeBetweenSteps)
}
