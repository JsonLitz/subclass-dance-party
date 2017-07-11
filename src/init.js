$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // console.log(dancerMakerFunctionName);
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    //how can we access classes from the window object using the classname
    // console.log(window)
    // console.log(dancerMakerFunction);
    // make a dancer with a random position
    console.log(window)
    var dancer =  dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);

    // var chubbyDancer =

  });
});
var makeBlinkyDancer = (top, left, timeBetweenSteps) => {
  return new BlinkyDancer(top, left, timeBetweenSteps)
};

var makeChubbyDancer = (top, left, timeBetweenSteps) => {
  return new ChubbyDancer(top, left, timeBetweenSteps)
}
