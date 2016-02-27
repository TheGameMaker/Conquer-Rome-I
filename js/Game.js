var ConquerRome = ConquerRome || {};

ConquerRome.Game = function(){};

ConquerRome.Game.prototype = {
    create: function() {
	this.map = this.game.add.tilemap('level1');

	//First parameter is tileset name in Tiled, second is the key
	this.map.addTilsetImage('tiles', 'tiles');

	//create layers
	this.backgroundLayer = this.map.createLayer('Background');
	this.foliageLayer = this.map.createLayer('foliage');
	this.foliageLayer2 = this.map.createLayer('foliage2');
	this.blockedLayer = this.map.createLayer('Blocked');

	//set collision on blocked layer
	this.map.setCollisionBetween(1, 100000, true, 'blockedLayer');

	//resize game world to background dimensions
	this.backgroundLayer.resizeWorld();
    }
