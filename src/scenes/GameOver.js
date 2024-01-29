
// You can write more code here

/* START OF COMPILED CODE */

class GameOver extends Phaser.Scene {

	constructor() {
		super("GameOver");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// panel
		this.add.image(540, 960, "panel");

		// text_1
		const text_1 = this.add.text(540, 560, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "Game Over";
		text_1.setStyle({ "fontFamily": "Baskerville-Bold-02", "fontSize": "120px", "fontStyle": "bold" });

		// replayBtn
		const replayBtn = this.add.image(540, 1160, "replay_btn-sheet0");

		// homeBtn
		const homeBtn = this.add.image(540, 1260, "butmain-sheet0");

		this.replayBtn = replayBtn;
		this.homeBtn = homeBtn;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	replayBtn;
	/** @type {Phaser.GameObjects.Image} */
	homeBtn;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		this.scoreText = this.add.text(540, 860, 'Your Score: 0',
			{
				fontFamily: "Cowmondior",
				fontSize: '90px',
				align: 'center',
				color: '#fbfafaff'
			}
		);
		this.scoreText.setOrigin(0.5, 0.5);
		this.scoreText.setText('Your Score: ' + score);

		this.bestScoreText = this.add.text(540, 1010, 'Best Score: ' + bestScore,
			{
				fontFamily: "Cowmondior",
				fontSize: '90px',
				align: 'center',
				color: '#fbfafaff'
			}
		);
		this.bestScoreText.setOrigin(0.5, 0.5);


		this.replayBtn.setInteractive().on('pointerdown', () => {
			this.scene.stop("GameOver");
			this.scene.start("Level");
		});
		this.homeBtn.setInteractive().on('pointerdown', () => {
			this.scene.stop("GameOver");
			this.scene.start("Home");
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

		this.replayBtn.on('pointerover', () => this.pointerOver([this.replayBtn], 1));
		this.replayBtn.on('pointerout', () => this.pointerOut([this.replayBtn], 1));

		this.homeBtn.on('pointerover', () => this.pointerOver([this.homeBtn], 1));
		this.homeBtn.on('pointerout', () => this.pointerOut([this.homeBtn], 1));
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
