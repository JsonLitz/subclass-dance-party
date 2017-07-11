class TinaDancer extends Dancer {
	constructor(top, left, timeBetweenSteps) {
		super(top, left, timeBetweenSteps);
		this.$node = $("<img src=\"http://i2.kym-cdn.com/photos/images/original/000/993/254/70f.gif\">");
	}
}

var makeTinaDancer = (top, left, timeBetweenSteps) => {
	return new TinaDancer(top, left, timeBetweenSteps);
}

class LeftSharkDancer extends Dancer {
	constructor(top, left, timeBetweenSteps) {
		super(top, left, timeBetweenSteps);
		this.$node = $("<img src=\"http://38.media.tumblr.com/cfd039730669f89c064f69e57e0877af/tumblr_nj6ipiNACJ1t8s6eeo1_250.gif\">");
	}
}

var makeLeftSharkDancer = (top, left, timeBetweenSteps) => {
	return new LeftSharkDancer(top, left, timeBetweenSteps);
}

class SteveDancer extends Dancer {
	constructor(top, left, timeBetweenSteps) {
		super(top, left, timeBetweenSteps);
		this.$node = $("<img id=\"steve\" src=\"https://media.giphy.com/media/kZyaFi6aCOLde/giphy.gif\">");
	}
}

var makeSteveDancer = (top, left, timeBetweenSteps) => {
	return new SteveDancer(top, left, timeBetweenSteps);
}

class SpongeBobDancer extends Dancer {
	constructor(top, left, timeBetweenSteps) {
		super(top, left, timeBetweenSteps);
		this.$node = $("<img id=\"steve\" src=\"http://31.media.tumblr.com/ab2e55973a4bea217d0ab2bb26127dbe/tumblr_my8swxQ8EO1r9b2pfo1_250.gif\">");
	}
}

var makeSpongeBobDancer = (top, left, timeBetweenSteps) => {
	return new SpongeBobDancer(top, left, timeBetweenSteps);
}

class CarltonDancer extends Dancer {
	constructor(top, left, timeBetweenSteps) {
		super(top, left, timeBetweenSteps);
		this.$node = $("<img id=\"steve\" src=\"https://media.giphy.com/media/qQPISdaKEdxK0/giphy.gif\">");
	}
}

var makeCarltonDancer = (top, left, timeBetweenSteps) => {
	return new CarltonDancer(top, left, timeBetweenSteps);
}

class SkeletonDancer extends Dancer {
	constructor(top, left, timeBetweenSteps) {
		super(top, left, timeBetweenSteps);
		this.$node = $("<img id=\"steve\" src=\"http://31.media.tumblr.com/103c6d00755949f87e1fb25eebf8ae92/tumblr_ndu9sci7oX1skn1oxo1_250.gif\">");
	}
}

var makeSkeletonDancer = (top, left, timeBetweenSteps) => {
	return new SkeletonDancer(top, left, timeBetweenSteps);
}
