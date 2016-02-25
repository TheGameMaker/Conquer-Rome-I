var ConquerRome = ConquerRome || {};

//loading game assets
ConquerRome.Preload = function(){};

ConquerRome.Preload.prototype = {
    preload: function() {
	//show loading screen
	this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadbar');
	this.preloadBar.ancho.setTo(0.5);

	this.load.setPreloadSprite(this.preloadBar);

	//load assets
	this.load.tilemap('level1', 'assets/level1.json', null, Phaser.Tilemap.TILED_JSON);
//	this.load.image('background', 'assets/level1.png');
	this.load.image('tiles', 'assets/tiles.png');
	this.load.image('ground', 'assets/ground.png');
	this.load.image('RBL', 'assets/RBL.png');
    },
    create: function() {
	this.state.start('Game');
    }
};
