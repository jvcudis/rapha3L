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
		this.setStaticTexts();

	},
	setStaticTexts: function() {
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
			return;
		}

		node.add(_paper.path(element[0].path).attr(element[0].attrs));
	},
	buildActionPanel: function(app) {
		// Initialize all extension-wide elements
		this.initCanvas(app);

		// Setup panel background
		this.setPanelBackground(backgroundPaths.panel.background);

		// Setup panel buttons
		this.setPanelButtons();
	},
	setPanelBackground: function(data) {

		this.addNode(
			data.id,
			[{
				path: data.path,
				attrs: data.attrs
			}]
		);
	},
	setPanelButtons: function() {

	}
};

})();