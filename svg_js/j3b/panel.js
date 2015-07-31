(function(R) {

R.fn.panel = function(args) {

  var paper = this;
  var _canvas = this.canvas;
  var _panel = this.panel = {};

  this.create = function(id, opts) {

    // Create a panel element <g> and add it to the canvas
    _panel = document.createElementNS("http://www.w3.org/2000/svg", "g");

    // Set card id
    if (id != undefined) {
      _panel.setAttribute('id', id);
    }

    this.add(opts.element);

    _canvas.appendChild(_panel);

    return _panel;
  }

  this.add = function(rElement) {
    _panel.appendChild(rElement.node);
  }

  this.remove = function(rElement) {
    _canvas.appendChild(rElement.node);
  }

  this.transform = function(tString) {
    _panel.setAttribute('transform', tString);
  }

  return paper;
};

})(Raphael);