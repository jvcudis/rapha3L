(function(R) {

var cardProps = {
	card01: {
		id: 'card-01',
		tStr: 'matrix( 0.5999908447265625, 0, 0, 0.5999908447265625, 29.5,-78)'
	},
	card02: {
		id: 'card-02',
		tStr: 'matrix( 0.5999908447265625, 0, 0, 0.5999908447265625, 69.5,-78)'
	},
	card03: {
		id: 'card-03',
		tStr: 'matrix( 0.5999908447265625, 0, 0, 0.5999908447265625, 109.5,-78)'
	},
	card04: {
		id: 'card-04',
		tStr: 'matrix( 0.5999908447265625, 0, 0, 0.5999908447265625, 149.5,-78)'
	},
	card05: {
		id: 'card-05',
		tStr: 'matrix( 0.5999908447265625, 0, 0, 0.5999908447265625, 189.5,-78)'
	},
	card06: {
		id: 'card-06',
		tStr: 'matrix( 0.5999908447265625, 0, 0, 0.5999908447265625, 229.5,-78)'
	},
	card07: {
		id: 'card-07',
		tStr: 'matrix( 0.5999908447265625, 0, 0, 0.5999908447265625, 269.5,-78)'
	},
	card08: {
		id: 'card-08',
		tStr: 'matrix( 0.5999908447265625, 0, 0, 0.5999908447265625, 309.5,-78)'
	},
	card09: {
		id: 'card-09',
		tStr: 'matrix( 0.5999908447265625, 0, 0, 0.5999908447265625, 349.5,-78)'
	},
	card10: {
		id: 'card-10',
		tStr: 'matrix( 0.5999908447265625, 0, 0, 0.5999908447265625, 389.5,-78)'
	},
	card11: {
		id: 'card-11',
		tStr: 'matrix( 0.5999908447265625, 0, 0, 0.5999908447265625, 429.5,-78)'
	},
	card12: {
		id: 'card-12',
		tStr: 'matrix( 0.5999908447265625, 0, 0, 0.5999908447265625, 469.5,-78)'
	}
}

var imgAttrs = {
	x: 0,
	y: 0,
	width: 48.8,
	height: 147.8,
	data: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAYABgAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMAEAMCAwYAAAIhAAAC5AAABLn/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIAMUAQQMBIgACEQEDEQH/ xACQAAEBAAMBAQAAAAAAAAAAAAAABQIDBAEGAQEAAAAAAAAAAAAAAAAAAAAAEAACAgEDBAMBAAAA AAAAAAAENgAgBQIDJBAUBhZgARITEQAAAwYDBQcDBQAAAAAAAAABAgQAECADcwURsbKhQpLSNCEx QWESE9NRUpSR0SMzFBIBAAAAAAAAAAAAAAAAAAAAYP/aAAwDAQACEQMRAAAA+r8ViSrCT0d0IupV UAk1pNYAT6AkbaUcsAk1pNYAAR7EcsAk1pNYAAR7EcsAk1pNYAAR7EcsAk1pNYAAR7EcsAk1pNYA AR7EcsAk1pNYAAR7EcsAk1pNYAAR7EcsAk1pNYAAR7EcsAk1pNYAAR7EcsAk1om4qpQqpQqx8+Yv Aw1gAAzDYD//2gAIAQIAAQUA+A//2gAIAQMAAQUA+A//2gAIAQEAAQUAyhOR+j+28lnbeSztvJZ2 3ksDP+9zc6msFMxs/ovHZXVr19DWCmQE3t/f3MPq39GNK3+5hrBYJjhrBYJjhrBYJjhrBYJjhrBY JjhrBYJjhrBYJjhrBYJjhrBYJjhrBYJjhrBYJjhrBYJjhrBYJjhrBYJjhrBYJjhrBYJjhrBYJjhr BYJjhrBYJjhrBYJjmXLHCzPs+Bns+Bns+Bns+Bns+Bns+BmILHNzk1/j88ScScScScScSbf8en// 2gAIAQICBj8AA//aAAgBAwIGPwAD/9oACAEBAQY/AEaJBMlyRUFnHOebLGZ/V6MAAAOT7m69L+Mb 5m69L+Mb5m69L+Mb5m65KPl/mN8zClUlCUrIHaTHsMH3E+oQWykpylQkDESiYPVLOHeUxfEP1YEi 3AincOHYWYAeIfs+2UlOUqGUeWACBAEBxHDvwb0zRAPEMO8B+oCyi3KDe5MShLEJviYswBEMfMMH WykpylR3Kmn0mdbKSnKVHcqafSZ1spKcpUdypp9JnWykpylR3Kmn0mdbKSnKVHcqafSZ1spKcpUd ypp9JnWykpylR3Kmn0mdbKSnKVHcqafSZ1spKcpUdypp9JnWykpylR3Kmn0mdbKSnKVHcqafSZ1s pKcpUdypp9JnWykpylR3Kmn0mdbKSnKVHcqafSZ1spKcpUdypp9JnWykpylR3Kmn0mdbKSnKVHcq afSZ1spKcpUdypp9JnWykpylR3Kmn0mdbKSnKVHcqafSZ1tUKj+3JCWoKJxARABMEvAOwBbrC8J+ VusLwn5W6wvCflbrC8J+VusLwn5W6wvCfla4qEp/ckmJIADgAgAiBTY94A7+TD0+bbmxtzY25sbc 2NubG3NjD7fp88Hf/9k='
}

var patAttrs = {
	id: 'pat-mini-card',
	patternUnits: 'userSpaceOnUse',
	patternTransform: '',
	patternContentUnits: 'objectBoundingBox',
	width: 48,
	height: 147,
	x: 0,
	y: 0
}

R.fn.deck = function(opts) {

	// NOTE: 'this' object refers to RaphaelJS paper
	var paper = this;
	var _canvas = this.canvas;
	var _deck = {};
	var _cards = this._cards = [];
	var cardPat = {}

	// Initialize deck cards
	this.initialize = function() {

		// Create a deck element <g> that serves as container for all card elements
    _deck = document.createElementNS("http://www.w3.org/2000/svg", "g");
    _deck.setAttribute('id', 'deck');

		// TODO: Create the filters need to be used by the cards
		this.cardPat = paper.pattern().create(patAttrs, imgAttrs);

			// Create all cards
		_.each(cardProps, function(data, key) {
			var c = paper.miniCard().create(data.id);
			_cards.push(c);

			// To apply custom drag functions, use this in which startFn, moveFn and endFn are functions
			// _cards.push(paper.miniCard().create(data.id, data.tStr, startFn, moveFn, endFn));

			_deck.appendChild(c);
		});

	 _canvas.appendChild(_deck);

		// NOTE: when you return the 'this' object or in this case the paper variable,
		//			 you activate the chaining functionality of your customized object
		return paper;
	}

	// Add card to canvas
	this.addCard = function(rElement) {

	}

	// Remove card from canvas
	this.removeCard = function(rElement) {

	}

	// Change placement of card
	this.transformCard = function(tString) {

	}

	return paper;
}

})(Raphael);