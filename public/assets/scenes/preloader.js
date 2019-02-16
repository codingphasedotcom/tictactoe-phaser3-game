export default class Intro extends Phaser.Scene {
	constructor() {
		super({
			key: 'preloader'
		});
	}
	preload() {
		this.facebook.once('startgame', this.create, this);
		this.facebook.showLoadProgress(this);

		this.load.audio('intro_music', ['/assets/audio/01-Opening.ogg']);
		this.load.image('background', '/assets/sprites/titlescreen/background.png');
		this.load.image('bgbox', '/assets/sprites/titlescreen/bgbox.png');
		this.load.image('title', '/assets/sprites/titlescreen/title.png');
		this.load.image(
			'tictactoe',
			'/assets/sprites/titlescreen/tictactoetitle.png'
		);
		this.load.image(
			'championships',
			'/assets/sprites/titlescreen/championshipstitle.png'
		);
		this.load.image(
			'startbutton',
			'/assets/sprites/titlescreen/startbutton.png'
		);
		this.load.audio('coin_sound', ['/assets/audio/sfx_coin_double1.wav']);
		this.load.audio('winning_sound', ['/assets/audio/sfx_sounds_powerup4.wav']);
		this.load.image('title', '/assets/sprites/titlescreen/title.png');

		this.load.image('box_blank', '/assets/sprites/box_blank.png');
		this.load.image('box_xblue', '/assets/sprites/box_xblue.png');
		this.load.image('box_ored', '/assets/sprites/box_ored.png');
		this.load.image('boardbg', '/assets/sprites/board/boardbg.png');

		this.load.image('playagain', '/assets/sprites/board/playagain.png');
		this.load.image('wins', '/assets/sprites/board/wins.png');

		this.load.image('xIcon', '/assets/sprites/board/x.png');
		this.load.image('oIcon', '/assets/sprites/board/o.png');

		var progress = this.add.graphics();
		const self = this;
		this.load.on('progress', function(value) {
			progress.clear();
			progress.fillStyle(0x42f456, 1);
			progress.fillRect(0, 300, 800 * value, 20);
		});

		this.load.on('complete', function() {
			progress.destroy();
		});
	}
	create() {
		this.scene.start('Intro');
	}
	update(delta) {}
}
