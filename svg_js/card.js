/* Card Object */
/* A Card refers to those editable white cards. */

(function(R) {



R.fn.card = function(points) {

	this.x = 100;
	this.y = 100;

	this.draw = function () {
	    return DrawApp.paper.rect(this.x, this.y, defs.card.w, defs.card.h).attr({fill: 'red'});
	};

	return this;
};

})(Raphael);