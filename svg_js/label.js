/* Board Label Object */
/* A Board Label is static. It serves as labels to the board stickies. */

(function() {

var labelPath = function (points) {

	// Rectangle properties
	var x = points[0];
	var y = points[1];
	var w = defs.sticky.w;
	var h = 35;
	var r1 = 8;
	var r2 = 8;
	var r3 = 0;
	var r4 = 0;

	var path = [];

	 path = path.concat(["M", x,r1+y, "Q", x,y, x+r1,y]);
	 path = path.concat(["L", x+w-r2,y, "Q", x+w,y, x+w,y+r2]);
	 path = path.concat(["L", x+w,y+h-r3, "Q", x+w,y+h, x+w-r3,y+h]);
	 path = path.concat(["L", x+r4,y+h, "Q", x,y+h, x,y+h-r4, "Z"]);

	return path;
}

Raphael.fn.label = function(points) {
	return this.path(labelPath(arguments));
};

})();