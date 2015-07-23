(function(){

	var shape, lastPoint;

	// Day Fault Properties
	var defaults = {
		width: 250,
		height: 600,
		fill: '#eae3aa',
		stroke: '#0a8fab'
	}

	Card = function(posX, posY) {
		// Call container contructor
		this.Container_constructor();

		// The card position is the only customizable property of a Card, for now...
		this.x = posX;
		this.y = posY;

		this.initialize();
	}

	var card = createjs.extend(Card, createjs.Container);

	card.initialize = function() {

		shape = new createjs.Shape();
		lastPoint = new createjs.Point();

		// Create the card shape
		// TODO: Use SVG laterz baby
		shape.graphics.beginFill(defaults.fill);
		shape.graphics.beginStroke(defaults.stroke);
		shape.graphics.drawRect(this.x, this.y, defaults.width, defaults.height);

		this.addChild(shape);

		// Set object specific properties
		this.setBounds(this.x, this.y, defaults.width, defaults.height);
		this.name = '_card_' + this.id;
		this.cursor = "pointer";
		this.mouseChildren = false;

		// Add event listeners
		this.on('click', this.writeCharacter);

		this.on('mousedown', this.startStroke);
		this.on('pressmove', this.drawStroke);
	}

	card.writeCharacter = function(event) {
		console.log('---- clicked ----');
		// TODO: Enable character writing
	}

	card.startStroke = function(event) {
		console.log('---- start stroking. harhar. ----');

		// Store the position
		lastPoint.x = event.stageX;
    lastPoint.y = event.stageY;

	}

	card.drawStroke = function(event) {
		console.log('---- start drawing. ----');

		var isRightBound = (event.stageX < ((this.x + defaults.width) - 10));
		var isLeftBound = (event.stageX > (this.x + 10));
		var isTopBound = (event.stageY < ((this.y + defaults.height) - 10));
		var isBottomBound = (event.stageY > (this.y + 10));

		// Only draw within bounds of the Card
		if(isRightBound && isLeftBound && isTopBound && isBottomBound) {
			shape.graphics.setStrokeStyle(10, "round");
			shape.graphics.beginStroke(defaults.stroke);
			shape.graphics.moveTo(lastPoint.x, lastPoint.y);
			shape.graphics.lineTo(event.stageX, event.stageY);
		}

    // Update the last position for next move
    lastPoint.x = event.stageX;
    lastPoint.y = event.stageY;
	}

	window.Card = createjs.promote(Card, 'Container');

})();
