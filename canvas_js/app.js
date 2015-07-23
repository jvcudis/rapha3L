var DrawApp = {
	canvas: {},
	stage: {},
	assets: {},
	svgManifest: [
		{ id: 'circle', src: './svg/circles1.svg' }
	],

	windowResize: function() {
		stage.canvas.width = window.innerWidth - 20;
		stage.canvas.height = window.innerHeight - 20;

		// TODO: Update elements during resize
		stage.update();
		// console.log('---- canvas resized ----');
	},

	loadAsset: function() {


	},

	handleCompleteLoaded: function(event) {
		console.log('---- manifest file loaded ----');
	},

	handleFileLoaded: function(event) {
		console.log('---- single file loaded ----');
		console.log(event.item);
	},

	preloadAssets: function() {
		console.log('---- preloading assets ----');

		assets = new createjs.LoadQueue(false, null, true);
		assets.loadManifest(this.svgManifest);

		// Register event handlers for file loading
		assets.on('complete', this.handleCompleteLoaded);
		assets.on('fileload', this.handleFileLoaded);
	},

	init: function() {
		// console.log('---- initializing canvas ----');

		this.preloadAssets();

		canvas = document.getElementById('canvas');
		stage = new createjs.Stage(canvas);

		createjs.Ticker.addEventListener('tick', stage);
		createjs.Touch.enable(stage);

		stage.enableMouseOver(10);

		this.windowResize();

		this.addCard();
	},

	addCard: function() {
		// console.log('---- adding card ----');

		var card = new Card(20, 20);

		stage.addChild(card);
		stage.update();
	}
};
