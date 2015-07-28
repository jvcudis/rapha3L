(function(R) {

R.fn.ig = function(args) {

  var _canvas = this.canvas;
  var _node = {};

  this.create = function(args) {
    _node = document.createElementNS("http://www.w3.org/2000/svg", "image");

    // Set default attributes
    if (args != undefined) {
      _node.setAttribute('id', args.id);
      _node.setAttribute('x', args.x);
      _node.setAttribute('y', args.y);
      _node.setAttribute('width', args.width);
      _node.setAttribute('height', args.height);
      _node.setAttribute('xlink:href', args.xlink_href);
    }

    _canvas.appendChild(_node);

    return this;
  }

  // this.add = function(rElement) {
  //   _node.appendChild(rElement.node);
  // }

  // this.remove = function(rElement) {
  //   _canvas.appendChild(rElement.node);
  // }

  // this.transform = function(tString) {
  //   _node.setAttribute('transform', tString);
  // }

  return this;
};

})(Raphael);