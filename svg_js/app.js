	var DrawApp = {
		paper: {},
		upperBoard: [],
		lowerBoard: [],

		initialize: function() {
			this.paper = Raphael('paper', defs.paper.w, defs.paper.h);
			this.paper.setViewBox(0, 0, defs.view.w, defs.view.h, true);
			this.paper.canvas.setAttribute('preserveAspectRatio', 'none');

			this.setupCardDeck();
			this.setupBoard();
			this.setupActionPanel();
		},

		setupCardDeck: function() {
			// TODO
		},

		setupBoard: function() {

			// Setup stickies on board
			// TODO: Improve this later by adding all stickies into a SET instead of an array
			// and then add an EL attribute to the whole SET instead of per sticky
			this.upperBoard = this.addStickies('upper');
			this.lowerBoard = this.addStickies('lower');

			// TODO: Setup static texts
		},

		addStickies: function(where) {
			var stickies = [];
			var x1, x2, x3, y, attrs;

			if (where == 'upper') {
				x1 = defs.board.upperRowX;
				y = defs.board.upperRowY;
				attrs = defs.sticky.upperAttrs;
			} else {
				x1 = defs.board.lowerRowX;
				y = defs.board.lowerRowY;
				attrs = defs.sticky.lowerAttrs;
			}

			x2 = (defs.sticky.w * 1) + 15;
			x3 = (defs.sticky.w * 2) + 20;

			// Add created stickies to array
			stickies.push(this.createSticky(x1, y, attrs));
			stickies.push(this.createSticky(x2, y, attrs));
			stickies.push(this.createSticky(x3, y, attrs));

			return stickies
		},

		createSticky: function(x, y, attrs) {
			var sticky = this.paper.sticky(x, y);
			sticky.attr(attrs);
			return sticky;
		},

		setupActionPanel: function() {
			// TODO
		}
	};