(function(R) {

R.fn.g = function(args) {

  var _canvas = this.canvas;
  var _node = {};

  this.create = function(id) {
    _node = document.createElementNS("http://www.w3.org/2000/svg", "g");

    _canvas.appendChild(_node);

    // Set id attribute
    if (id != undefined) {
      _node.setAttribute('id', id);
    }

    return this;
  }

  this.add = function(rElement) {
    _node.appendChild(rElement.node);
  }

  this.remove = function(rElement) {
    _canvas.appendChild(rElement.node);
  }

  this.transform = function(tString) {
    _node.setAttribute('transform', tString);
  }

  return this;
};

})(Raphael);