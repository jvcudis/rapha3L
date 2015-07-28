(function(R) {

R.fn.img = function(args) {

  var _defs = this.canvas;
  var _image = {};

  this.create = function(args) {
    _image = document.createElementNS("http://www.w3.org/2000/svg", "image");

    // Set default attributes
    if (args != undefined) {
      _image.setAttribute('id', args.id);
      _image.setAttribute('x', args.x);
      _image.setAttribute('y', args.y);
      _image.setAttribute('width', args.width);
      _image.setAttribute('height', args.height);
      _image.setAttribute('preserveAspectRatio', 'none');
      _image.setAttribute('href', args.href);
      _image.setAttribute('style', '-webkit-tap-highlight-color: rgba(0, 0, 0, 0);');
    }

    _defs.appendChild(_image);

    return this;
  }

  return this;
};

})(Raphael);