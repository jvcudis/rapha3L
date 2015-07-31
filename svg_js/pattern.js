(function(R) {

R.fn.pattern = function() {

  var _defs = this.defs;
  var _pattern = {};
  var _img = {};

  this.create = function(patAttrs, imgAttrs) {
    _pattern = document.createElementNS("http://www.w3.org/2000/svg", "pattern");

    _img = this.img().create('img-mini-card', imgAttrs);

    // Set default attributes
    if (patAttrs != undefined) {
      _pattern.setAttribute('id', patAttrs.id);
      _pattern.setAttribute('patternUnits', patAttrs.patternUnits);
      _pattern.setAttribute('patternTransform', patAttrs.patternTransform);
      _pattern.setAttribute('patternContentUnits', patAttrs.patternContentUnits);
      _pattern.setAttribute('width', patAttrs.width);
      _pattern.setAttribute('height', patAttrs.height);
      _pattern.setAttribute('x', patAttrs.x);
      _pattern.setAttribute('y', patAttrs.y);
    }

    _pattern.appendChild(_img);
    _defs.appendChild(_pattern);

    return _pattern;
  }

  return this;
};

})(Raphael);