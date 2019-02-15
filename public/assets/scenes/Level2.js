export default class Level2 extends Phaser.Scene {
	constructor() {
		super({
			key: 'Level2'
		});
	}

	preload() {
		this.load.image('box', '/assets/sprites/box_blank.png');
		this.load.image('button', '/assets/sprites/box_ored.png');
	}

	create() {
		this.box = this.add
			.image(116, 144, 'box')
			.setOrigin(0, 0)
			.setInteractive()
			.setDataEnabled()
			.data.set('box_number', 6);

		this.button = this.add
			.image(0, 144, 'button')
			.setOrigin(0, 0)
			.setInteractive();

		this.button.on('pointerdown', (pointer, localX, localY, event) => {
			this.scene.restart();
		});
		this.showData();
	}
	showData() {
		this.input.on('gameobjectdown', (pointer, gameObject) => {
			if (gameObject.data.get('box_number') == 6) {
				console.log(`BoxNumber: ${gameObject.data.get('box_number')}`);
			}
		});
	}
	update() {}
}
