var game;
const init = () => {
	class Boot extends Phaser.Scene {
		preload() {
			this.load.pack("pack", "assets/preload-asset-pack.json");
			this.load.on(Phaser.Loader.Events.COMPLETE, () =>
				this.scene.start("Preload")
			);
		}
	}
	game = new Phaser.Game({
		width: 1080,
		height: 1920,
		type: Phaser.AUTO,
		transparent: true,
		backgroundColor: "#242424",
		parent: "game-division",
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH,
			orientation: Phaser.Scale.Orientation.PORTRAIT,
		},
		audio: {
			disableWebAudio: false,
		},
		physics: {
			default: 'arcade',
			arcade: {
				gravity: {
				},
				debug : false,
			}
		},
		dom: {
			createContainer: true,
		},
	});
	game.scene.add("Preload", Preload);
	game.scene.add("Home", Home);
	game.scene.add("Level", Level);
	game.scene.add("GameOver", GameOver);
	game.scene.add("Boot", Boot, true);
};

window.onload = (event) => {
	init();
};
