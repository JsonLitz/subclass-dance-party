class GifDancer extends Dancer {
	constructor(top, left, timeBetweenSteps, url) {
		super(top, left, timeBetweenSteps);
		this.$node = $(`<img class=\"shrink\" src=\"${url}\">`);
		this.setPosition(top, left);
	}
}
var makeTinaDancer = (top, left, timeBetweenSteps) => {
	return new GifDancer(top, left, timeBetweenSteps, 'http://i2.kym-cdn.com/photos/images/original/000/993/254/70f.gif');
}
var makeLeftSharkDancer = (top, left, timeBetweenSteps) => {
	return new GifDancer(top, left, timeBetweenSteps, 'http://38.media.tumblr.com/cfd039730669f89c064f69e57e0877af/tumblr_nj6ipiNACJ1t8s6eeo1_250.gif');
}
var makeSteveDancer = (top, left, timeBetweenSteps) => {
	return new GifDancer(top, left, timeBetweenSteps, 'https://media.giphy.com/media/kZyaFi6aCOLde/giphy.gif');
}
var makeSpongeBobDancer = (top, left, timeBetweenSteps) => {
	return new GifDancer(top, left, timeBetweenSteps, 'http://31.media.tumblr.com/ab2e55973a4bea217d0ab2bb26127dbe/tumblr_my8swxQ8EO1r9b2pfo1_250.gif');
}
var makeCarltonDancer = (top, left, timeBetweenSteps) => {
	return new GifDancer(top, left, timeBetweenSteps, 'https://media.giphy.com/media/qQPISdaKEdxK0/giphy.gif');
}
var makeSkeletonDancer = (top, left, timeBetweenSteps) => {
	return new GifDancer(top, left, timeBetweenSteps, 'http://31.media.tumblr.com/103c6d00755949f87e1fb25eebf8ae92/tumblr_ndu9sci7oX1skn1oxo1_250.gif');
}
