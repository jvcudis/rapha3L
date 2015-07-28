/* Board Label Object */
/* A Board Label is static. It serves as labels to the board stickies. */

(function() {

var labelPath = function (points) {

	// Rectangle properties
	var x = points[0];
	var y = points[1];
	var w = points[2];
	var h = points[3];
	var r1 = points[4];
	var r2 = points[5];
	var r3 = points[6];
	var r4 = points[7];

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