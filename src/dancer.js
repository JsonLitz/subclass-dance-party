class Dancer {
  constructor(top, left, timeBetweenSteps) {
    this.top = top;
    this.left = left;
    this.timeBetweenSteps = timeBetweenSteps;
    this.$node = $('<span class="dancer"></span>');
    this.setPosition(top, left);
    this.step(timeBetweenSteps);
  }
  stepCenter() {
    if(window.leftHalf.includes(this)){
      this.$node.animate({left:'30%', top:'50%', height : '350px', width : '350px'}, 500);
    } else if (window.rightHalf.includes(this)) {
      this.$node.animate({left:'55%', top:'50%', height : '350px', width : '350px'}, 500);
    }
  }
  stepBack() {
    let leftValue = (window.rightHalf.includes(this)) ? '90%' : '5%';
    this.$node.animate({left:leftValue, height:'150px', width:'150px'}, 1250);
  }
  step(timeBetweenSteps) {
    setTimeout(()=>{
      this.step(timeBetweenSteps);
    }, timeBetweenSteps);
  }
  setPosition(top, left) {
    let styleSettings = {//setting initial coordinates
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  }
}
