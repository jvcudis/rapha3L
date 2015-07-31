(function(R) {

Raphael.st.draggable = function(start, move, end) {
  var me = this,
      lx = 0,
      ly = 0,
      ox = 0,
      oy = 0,
      moveFnc = function(dx, dy) {
          lx = dx + ox;
          ly = dy + oy;
          me.transform('t' + lx + ',' + ly);
          console.log('moving');
      },
      startFnc = function() {
        console.log('start');
      },
      endFnc = function() {
          ox = lx;
          oy = ly;
      };

  // Allow overriding of drag functions
  if (start != undefined) {
    startFnc = start;
  }

  if (move != undefined) {
    moveFnc = move;
  }

  if (end != undefined) {
    endFnc = end;
  }

  this.drag(moveFnc, startFnc, endFnc);
};

})(Raphael);