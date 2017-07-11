// Creates and returns a new dancer object that can step
// Creates and returns a new dancer object that can step
class Dancer {
  constructor(top, left, timeBetweenSteps) {
    this.top = top;
    this.left = left;
    this.timeBetweenSteps = timeBetweenSteps;
    // use jQuery to create an HTML <span> tag
    this.$node = $('<span class="dancer"></span>');
    this.setPosition(top, left);
    this.step(timeBetweenSteps);
  }
  //
  step(timeBetweenSteps) {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step

    setTimeout(()=>{
      // console.log(this);
      this.step(timeBetweenSteps)
    }, timeBetweenSteps);
  }
  //
  setPosition(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/

    let styleSettings = {//setting initial coordinates
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  }

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
}


// var makeDancer = function(top, left, timeBetweenSteps) {
//
//   var dancer = {};
//
//   // use jQuery to create an HTML <span> tag
//   dancer.$node = $('<span class="dancer"></span>');
//
//   dancer.step = function() {
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     setTimeout(dancer.step, timeBetweenSteps);
//   };
//   dancer.step();
//
//   dancer.setPosition = function(top, left) {
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     dancer.$node.css(styleSettings);
//   };
//
//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   dancer.setPosition(top, left);
//
//   return dancer;
// };
