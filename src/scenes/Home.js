// You can write more code here
import Phaser from "../../node_modules/phaser/dist/phaser";

/* START OF COMPILED CODE */

export default class Home extends Phaser.Scene {

	constructor() {
		super("Home");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// panel
		this.add.image(540, 960, "panel");

		// playBtn
		const playBtn = this.add.image(540, 1550, "playBtn");

		// logoBoxContainer
		const logoBoxContainer = this.add.container(0, 0);

		// box1
		const box1 = this.add.image(380, 600, "box1");
		logoBoxContainer.add(box1);

		// box2
		const box2 = this.add.image(220, 440, "box2");
		logoBoxContainer.add(box2);

		// box3
		const box3 = this.add.image(539, 440, "box3");
		logoBoxContainer.add(box3);

		// box4
		const box4 = this.add.image(700, 600, "box4");
		logoBoxContainer.add(box4);

		// box5
		const box5 = this.add.image(860, 440, "box5");
		logoBoxContainer.add(box5);

		// rectangle_1
		const rectangle_1 = this.add.rectangle(540, 165, 1080, 50);
		rectangle_1.visible = false;
		rectangle_1.isFilled = true;
		logoBoxContainer.add(rectangle_1);

		// rectangle
		const rectangle = this.add.rectangle(-15, 960, 50, 1920);
		rectangle.visible = false;
		rectangle.isFilled = true;
		logoBoxContainer.add(rectangle);

		// rectangle_2
		const rectangle_2 = this.add.rectangle(1100, 960, 50, 1920);
		rectangle_2.visible = false;
		rectangle_2.isFilled = true;
		logoBoxContainer.add(rectangle_2);

		// rectangle_3
		const rectangle_3 = this.add.rectangle(540, 1490, 1080, 50);
		rectangle_3.visible = false;
		rectangle_3.isFilled = true;
		logoBoxContainer.add(rectangle_3);

		this.playBtn = playBtn;
		this.logoBoxContainer = logoBoxContainer;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	playBtn;
	/** @type {Phaser.GameObjects.Container} */
	logoBoxContainer;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		this.boxGroup = this.add.group();
		this.logoBoxContainer.getAll().forEach((box) => {
			box = this.physics.add.existing(box, true);
			this.boxGroup.add(box);
		})

		this.ball = this.physics.add.sprite(540, 1450, "ball").setScale(0.5);
		this.ball.setVelocityY(-340);
		this.ball.setVelocityX(-190);
		this.ball.setBounce(1, 1);
		// this.ball.body.collideWorldBounds = true
		// this.ball.body.onWorldBounds = true

		this.physics.add.collider(this.ball, this.boxGroup, this.handleCollision, null, this);

		this.playBtn.setInteractive().on('pointerdown', () => {
			this.tweens.add({
				targets: this.playBtn,
				scaleX: 0.9,
				scaleY: 0.9,
				duration: 80,
				yoyo: true,
				onComplete: () => {
					this.scene.stop("Home");
					this.scene.start("Level");
				}
			});
		});

		this.pointerOver = (aBtn, scale) => {
			this.input.setDefaultCursor('pointer');
			this.tweens.add({
				targets: aBtn,
				scaleX: scale + 0.05,
				scaleY: scale + 0.05,
				duration: 50
			})
		}
		this.pointerOut = (aBtn, scale) => {
			this.input.setDefaultCursor('default');
			this.tweens.add({
				targets: aBtn,
				scaleX: scale,
				scaleY: scale,
				duration: 50,
				onComplete: () => {
					aBtn.forEach((btn) => {
						btn.setScale(scale);
					});
				}
			})
		}

		this.playBtn.on('pointerover', () => this.pointerOver([this.playBtn], 1));
		this.playBtn.on('pointerout', () => this.pointerOut([this.playBtn], 1));

	}

	handleCollision(ball, box) {
		this.handleCollisionTween = this.tweens.add({
			targets: box,
			scaleX: 0.8,
			scaleY: 0.8,
			duration: 500,
			ease: 'Cubic.easeInOut',
		});
	}

	update() {
		if (this.ball.x >= 1100) {
			this.ball.destroy();
			if (this.handleCollisionTween) {
				this.handleCollisionTween.stop();
			}
			this.logoBoxContainer.getAll().forEach((box) => {
				box.setScale(1);
			})
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
