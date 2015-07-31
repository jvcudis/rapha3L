(function(R) {

// Place in a parameter laterz to be passed to R.fn.actionPanel
var panelAttrs = {
	background: {
		id: 'panel-background',
		path: 'M 908.05 670 L 908 614.95 0 614.95 0 670 908.05 670 Z',
		attrs: {
			fill: '#C8A64E',
			stroke: 'none'
		}
	},
	buttons: {
		_01: {
			id: 'btn-open-deck',
			path: 'M 82 41 L 82 0 0 0 0 41 82 41 Z',
			attrs: {
				fill: "url('/svg/bitmap225.png')",
				stroke: 'none',
				cursor: 'pointer'
			},
			transStr: 'matrix( 1, 0, 0, 1, 576,622)'
		},
		_02: {
			id: 'btn-clear-board',
			path: 'M 82 41 L 82 0 0 0 0 41 82 41 Z',
			attrs: {
				fill: "url('/svg/bitmap222.png')",
				stroke: 'none',
				cursor: 'pointer'
			},
			transStr: 'matrix( 1, 0, 0, 1, 673,622)'
		},
		_03: {
			id: 'btn-open-template',
			path: 'M 41 41 L 41 0 0 0 0 41 41 41 Z',
			attrs: {
				fill: "url('/svg/bitmap214.png')",
				stroke: 'none',
				cursor: 'pointer'
			},
			transStr: 'matrix( 1, 0, 0, 1, 768,622)'
		},
		_04: {
			id: 'btn-hide-template',
			path: 'M 41 41 L 41 0 0 0 0 41 41 41 Z',
			attrs: {
				fill: "url('/svg/bitmap217.png')",
				stroke: 'none',
				cursor: 'pointer'
			},
			transStr: 'matrix( 1, 0, 0, 1, 824,622)'
		}
	}
}

R.fn.actionPanel = function(opts) {

	// NOTE: 'this' object refers to RaphaelJS paper
	var paper = this;
	var _canvas = this.canvas;
	var _panel = {};
	var _btns = this._btns = [];

	// Initialize action panel
	this.initialize = function() {
		var bg = {};

		// Create a deck element <g> that serves as container for all card elements
    _panel = document.createElementNS("http://www.w3.org/2000/svg", "g");
    _panel.setAttribute('id', 'panel');

		// TODO: Set action panel background
		// bg = this.setBackground(panelAttrs.background);

		// TODO: Set action buttons



		_canvas.appendChild(_panel);
		// _panel.appendChild(bg);

		// NOTE: when you return the 'this' object or in this case the paper variable,
		//			 you activate the chaining functionality of your customized object
		return paper;
	}

	this.setBackground = function(args) {
		return paper.panel().create(args.id).add(paper.path(args.path).attr(args.attrs));
	}

	return paper;
}

})(Raphael);