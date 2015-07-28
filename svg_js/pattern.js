(function(R) {

R.fn.pattern = function() {

  var _defs = this.defs;
  var _pattern = {};
  var _use = {};

  this.create = function(args1, args2) {
  	_use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    _pattern = document.createElementNS("http://www.w3.org/2000/svg", "pattern");

    // Set default attributes
    if (args1 != undefined) {
      _pattern.setAttribute('id', args1.id);
      _pattern.setAttribute('patternUnits', args1.patternUnits);
      _pattern.setAttribute('patternTransform', args1.patternTransform);
      _pattern.setAttribute('width', args1.width);
      _pattern.setAttribute('height', args1.height);
    }

    if (args2 != undefined) {
    	_use.setAttribute('xlink:href', args2.link);
    }

    _defs.appendChild(_pattern);
    _pattern.appendChild(_use);

    return this;
  }

  return this;
};

})(Raphael);