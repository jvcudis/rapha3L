/* Sticky Object */
/* A Sticky refers to those panel where you can place cards. */

(function() {

Raphael.fn.backgroundBuilder = {
	_svg: {},
	_g: {},
	_paper: {},
	initCanvas: function(app) {
		// Initialize SVG canvas
		_paper = app.paper;

		// Check if an SVG canvas already exists
		if (_paper == undefined) {
			console.log("Please make sure you have created a Rapahel canvas.");
			return;
		}
	},
	buildBoard: function(app) {
		// Initialize all extension-wide elements
		this.initCanvas(app);

		// Setup the boards
		this.setBoards(backgroundPaths.sticky_upper);
		this.setBoards(backgroundPaths.sticky_lower);

		// Setup the labels
		this.setLabels(backgroundPaths.btn_top);
		this.setLabels(backgroundPaths.btn_right);

		// Setup the static texts
		this.setStaticText();

		// Setup image pattern size
		this.setImagePattern('#static_circle path', 0.5);
		this.setImagePattern('#static_arrow path', 0.5);
	},
	setStaticText: function() {
		var data = backgroundPaths.static_texts;

		for (var cnt = 0; cnt < _.size(data); cnt++) {
			var dataEl = data['_0' + (cnt + 1)];
			this.addNode(
				dataEl.id,
				[{
					path: dataEl.path,
					attrs: dataEl.attrs
				}]
			);
		}
	},
	setLabels: function(data) {

		var objArr = []

		for (var cnt = 0; cnt < _.size(data); cnt++) {

			var dataEl = data['_0' + (cnt + 1)];

			if (dataEl == undefined) {
				return;
			}

			objArr = _.filter(dataEl, function(data, key) {
				if (key != 'id') {
					return data;
				}
			});

			this.addNode(
				dataEl.id,
				objArr
			);
		}
	},
	setBoards: function(data) {

		for (var cnt = 0; cnt < (_.size(data) - 1); cnt++) {
			var dataEl = data['_0' + (cnt + 1)];
			this.addNode(
				dataEl.id,
				[{
					path: dataEl.path,
					attrs: data.attrs
				}]
			);
		}

	},
	addNode: function(g_id, element) {

		var node = _paper.g().create(g_id);

		if (element.length > 1) {
			for (var cnt in element) node.add(_paper.path(element[cnt].path).attr(element[cnt].attrs));
			return node;
		}

		node.add(_paper
			.path(element[0].path)
			.attr(element[0].attrs));

		return node;
	},
	addClickableNode: function(g_id, element, callback) {
		var node = _paper.g().create(g_id);

		node.add(_paper
			.path(element[0].path)
			.attr(element[0].attrs)
			.click(callback));

		return node;
	},
	// addDraggableNode: function(g_id, element, callback) {
	// 	var node = _paper.g().create(g_id);

	// 	node.add(_paper
	// 		.path(element[0].path)
	// 		.attr(element[0].attrs)
	// 		.click(callback));

	// 	return node;
	// },
	buildActionPanel: function(app) {
		// Initialize all extension-wide elements
		this.initCanvas(app);

		// Setup panel background
		this.setPanelBackground(backgroundPaths.panel.background);

		// Setup panel buttons with the same events
		// this.setPanelButtons(
		// 	backgroundPaths.panel.buttons,
		// 	function() { console.log('insert actual click event here.'); }
		// );

		// Open deck
		this.setPanelButtonAction(
			backgroundPaths.panel.buttons._01,
			function() {
				console.log('Open Deck Button clicked!');
			}
		);

		// Clear board
		this.setPanelButtonAction(
			backgroundPaths.panel.buttons._02,
			function() {
				console.log('Clear Board Button clicked!');
			}
		);

		// Open template
		this.setPanelButtonAction(
			backgroundPaths.panel.buttons._03,
			function() {
				console.log('Open Template Button clicked!');
			}
		);

		// Hide template
		this.setPanelButtonAction(
			backgroundPaths.panel.buttons._04,
			function() {
				console.log('Hide Template Button clicked!');
			}
		);

		// Setup image pattern size
		this.setImagePattern('#btn-open-deck path', 0.5);
		this.setImagePattern('#btn-clear-board path', 0.5);
		this.setImagePattern('#btn-open-template path', 0.5);
		this.setImagePattern('#btn-hide-template path', 0.5);
	},
	setPanelBackground: function(data) {
		// Add panel background node
		this.addNode(
			data.id,
			[{
				path: data.path,
				attrs: data.attrs
			}]
		);
	},
	setPanelButtonAction: function(dataEl, callback) {
		var btn = this.addClickableNode(
			dataEl.id,
			[{
				path: dataEl.path,
				attrs: dataEl.attrs
			}],
			callback
		);
		btn.transform(dataEl.transStr);
	},
	setPanelButtons: function(data, callback) {

		var btn = {};

		for (var cnt = 0; cnt < _.size(data); cnt++) {
			var dataEl = data['_0' + (cnt + 1)];
			btn = this.addClickableNode(
				dataEl.id,
				[{
					path: dataEl.path,
					attrs: dataEl.attrs
				}],
				callback
			);
			btn.transform(dataEl.transStr);
		}

	},
	setImagePattern: function(id, ratio) {
		var pathEl = $(id);
		var pattern = $(pathEl).attr('fill');

		if (pattern) {
			pattern = pattern.replace('url(', '').replace(')', '');
			pattern = $(pattern);
		}

		setTimeout(function() {
			var newW = $(pattern)[0].getAttribute('width') * ratio;
			var newH = $(pattern)[0].getAttribute('height') * ratio;

			$(pattern)[0].setAttribute('width', newW);
			$(pattern)[0].setAttribute('height', newH);

			$(pattern).find('image')[0].setAttribute('width', newW);
			$(pattern).find('image')[0].setAttribute('height', newH);
			$(pattern).find('image')[0].setAttribute('preserveAspectRatio', 'defer none meet');
		}, 500);
	}
};

})();