/* Sticky Object */
/* A Sticky refers to those panel where you can place cards. */

(function() {

var stickyPath = function (points) {

	// Rectangle properties
	var x = points[0];
	var y = points[1];
	var w = defs.sticky.w;
	var h = defs.sticky.h;
	var r = defs.sticky.r;

	var path = [];

	 path = path.concat(["M", x,r+y, "Q", x,y, x+r,y]);
	 path = path.concat(["L", x+w-r,y, "Q", x+w,y, x+w,y+r]);
	 path = path.concat(["L", x+w,y+h-r, "Q", x+w,y+h, x+w-r,y+h]);
	 path = path.concat(["L", x+r,y+h, "Q", x,y+h, x,y+h-r, "Z"]);

	return path;
}

Raphael.fn.sticky = function(points) {
	return this.path(stickyPath(arguments));
};

})();