var ConquerRome = ConquerRome || {};

ConquerRome.game = new Phaser.Game(160, 160, Phaser.AUTO, '');

ConquerRome.game.state.add('Boot', ConquerRome.Boot);
ConquerRome.game.state.add('Preload', ConquerRome.Preload);
//ConquerRome.game.state.add('MainMenu', ConquerRome.MainMenu);
ConquerRome.game.state.add('Game', ConquerRome.Game);

ConquerRome.game.state.start('Boot');
