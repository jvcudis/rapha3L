/* Button Object */
/* A Button support hover and callback events. */

(function() {

Raphael.fn.button = function(args) {

	this.imageSrc = args[0];
	this.x = args[1];
	this.y = args[2];
	this.w = args[3];
	this.h = args[4];

	this.create = function () {
	    var btnContainer = DrawApp.paper.set();
	    var btnBackground = DrawApp.paper.rect(this.x, this.y, this.w, this.h).attr(defs.button.attrs);
	    var btnIcon = DrawApp.paper.image(this.imageSrc, this.x, this.y, this.w, this.h);
	    btnContainer.push(btnBackground);
	    btnContainer.push(btnIcon);

	    return btnContainer;
	};

	return this;
};

})();