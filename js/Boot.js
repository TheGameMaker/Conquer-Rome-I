var ConquerRome = ConquerRome || {};

ConquerRome.Boot = function(){};

//loading assets
ConquerRome.Boot.prototype = {
    preload: function() {
	this.load.image('preloadbar', 'assets/preloadbar.png');
    },
    create: function() {
	//white background
	this.game.stage.backgroundColor = '#fff';

	//scaling
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

	//center game
	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;

	//physics
	this.game.physics.startSystem(Phaser.Physics.ARCADE);

	this.state.start('Preload');
    }
};
