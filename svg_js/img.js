(function(R) {

R.fn.img = function(args) {

  var _defs = this.defs;
  var _image = {};

  this.create = function(id, args) {
    _image = document.createElementNS("http://www.w3.org/2000/svg", "image");

    // Set default attributes
    if (args != undefined) {
      _image.setAttribute('id', id);
      _image.setAttribute('x', args.x);
      _image.setAttribute('y', args.y);
      _image.setAttribute('width', args.width);
      _image.setAttribute('height', args.height);
      _image.setAttribute('preserveAspectRatio', 'none');
      _image.setAttributeNS('http://www.w3.org/1999/xlink', 'href', args.data);
      _image.setAttribute('style', '-webkit-tap-highlight-color: rgba(0, 0, 0, 0);');
    }

    _defs.appendChild(_image);

    return _image;
  }

  return this;
};

})(Raphael);