	var DrawApp = {
		paper: {},
		deck: {},
		actionPanel: {},
		upperBoard: [],
		lowerBoard: [],

		initialize: function() {
			this.paper = Raphael('paper', defs.paper.w, defs.paper.h);
			this.paper.setViewBox(0, 0, defs.view.w, defs.view.h, true);
			this.paper.canvas.setAttribute('preserveAspectRatio', 'none');

			//this.setupCardDeck();
			this.setupBoard();
			this.setupActionPanel();
		},

		setupCardDeck: function() {
			// Initialize card deck
			this.deck = this.paper.set();
		},

		setupBoard: function() {

			// Setup board labels
			var label1 = this.paper.label(defs.board.upperRowX, defs.board.upperRowY - 37).attr({fill: '#FF9700', stroke: "#ffffff"});
			var label1 = this.paper.label(defs.board.upperRowX + 84, defs.board.upperRowY - 37).attr({fill: '#FF9700', stroke: "#ffffff"});
			var label1 = this.paper.label(defs.board.upperRowX + (84 * 2), defs.board.upperRowY - 37).attr({fill: '#FF9700', stroke: "#ffffff"});

			// Setup stickies on board
			// TODO: Improve this later by adding all stickies into a SET instead of an array
			// and then add an EL attribute to the whole SET instead of per sticky
			this.upperBoard = this.addStickies('upper');
			this.lowerBoard = this.addStickies('lower');
		},

		addStickies: function(where) {
			var stickies = [];
			var x1, x2, x3, y, attrs;
			var spacer = 1;

			if (where == 'upper') {
				x1 = defs.board.upperRowX;
				y = defs.board.upperRowY;
				attrs = defs.sticky.upperAttrs;
			} else {
				x1 = defs.board.lowerRowX;
				y = defs.board.lowerRowY;
				attrs = defs.sticky.lowerAttrs;
			}

			x2 = (defs.sticky.w * 1) + (defs.board.upperRowX + spacer);
			x3 = (defs.sticky.w * 2) + (defs.board.upperRowX + (spacer*2));

			// Add created stickies to array
			stickies.push(this.createSticky(x1, y, attrs));
			stickies.push(this.createSticky(x2, y, attrs));
			stickies.push(this.createSticky(x3, y, attrs));

			return stickies
		},

		createSticky: function(x, y, attrs) {
			var sticky = this.paper.sticky(x, y);
			sticky.toBack();
			sticky.attr(attrs);
			return sticky;
		},

		setupActionPanel: function() {

			var panelBackground;

			// Initialize action panel
			this.actionPanel = this.paper.set();

			// Setup panel element
			panelBackground = this.paper.rect(defs.actionPanel.x, defs.actionPanel.y, defs.actionPanel.w, defs.actionPanel.h);
			panelBackground.attr(defs.actionPanel.attrs);

			// Add action buttons
			// TODO: Use either svg images or svg path for icons
			var showDeckBtn = this.paper.button(['./svg/bitmap225.png',315,390,30,25]).create();
			var removeAllCardsBtn = this.paper.button(['./svg/bitmap222.png',350,390,30,25]).create();
			var showTempCardPanelBtn = this.paper.button(['./svg/bitmap214.png',385,390,15,25]).create();
			var hideTempCardsBtn = this.paper.button(['./svg/bitmap217.png',405,390,15,25]).create();
		}
	};