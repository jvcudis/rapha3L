(function(R) {

var cardAttrs = {
  mini_card: {
    rect: {
      x: 0,
      y: 0,
      w: 48.8,
      h: 147.8,
      attrs: {
        stroke: '#000000',
        cursor: 'pointer'
      }
    }
  }
}

R.fn.miniCard = function(args) {

  var paper = this;
  var _canvas = this.canvas;
  var _card = {};
  var _rectCard = {};
  var cardSet = {};

  this.create = function(id, tString, dragStart, dragMove, dragEnd) {

    // Create a card element <g> and add it to the canvas
    _card = document.createElementNS("http://www.w3.org/2000/svg", "g");

    // Set card id
    if (id != undefined) {
      _card.setAttribute('id', id);
    }

    _canvas.appendChild(_card);

    // Create card set
    this.cardSet = paper.set();

    // Set card img
    var elAttrs = cardAttrs.mini_card, rectAttrs = elAttrs.rect;
    _rectCard = paper.rect(rectAttrs.x, rectAttrs.y, rectAttrs.w, rectAttrs.h).attr(rectAttrs.attrs);
    _rectCard.node.setAttributeNS(null, "fill", "url('#pat-mini-card')");

    _card.appendChild(_rectCard.node);

    // Add card to set and add draggable functionality
    this.cardSet.push(_rectCard).draggable(dragStart, dragMove, dragEnd);

    // Transform card
    if (tString != undefined) {
      this.transform(tString);
    }

    return _card;
  }

  this.add = function(rElement) {
    _card.appendChild(rElement.node);
  }

  this.remove = function(rElement) {
    _canvas.appendChild(rElement.node);
  }

  this.transform = function(tString) {
    _card.setAttribute('transform', tString);
  }

  return paper;
};

})(Raphael);