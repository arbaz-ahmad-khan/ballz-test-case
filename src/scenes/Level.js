// You can write more code here
import Phaser from "../../node_modules/phaser/dist/phaser";
import GameManager from '../scripts/GameManager';
import SoundManager from '../scripts/SoundManager';
const WAITING_FOR_PLAYER_INPUT = 0
const PLAYER_IS_AIMING = 1
const BALLS_ARE_RUNNING = 2
const ARCADE_PHYSICS_IS_UPDATING = 3
const PREPARING_FOR_NEXT_MOVE = 4
let ballRing = null;
let  score = 0;
      let bestScore = 0;
/* START OF COMPILED CODE */

export default class Level extends Phaser.Scene {

  constructor() {
    super("Level");

    /* START-USER-CTR-CODE */
    // Write your code here.

    /* END-USER-CTR-CODE */
  }

  /** @returns {void} */
  editorCreate() {

    // bg
    this.add.image(540, 960, "panel");

    // bottomBase
    const bottomBase = this.add.image(540, 1835, "bottomBase");
    bottomBase.alpha = 0.8;
    bottomBase.alphaTopLeft = 0.8;
    bottomBase.alphaTopRight = 0.8;
    bottomBase.alphaBottomLeft = 0.8;
    bottomBase.alphaBottomRight = 0.8;

    // ballCollector
    const ballCollector = this.add.image(540, 1838, "ballCollector");
    ballCollector.visible = false;

    // pauseContainer
    const pauseContainer = this.add.container(0, -1220);

    // pause_base
    const pause_base = this.add.image(540, 960, "pause-base");
    pauseContainer.add(pause_base);

    // homeBtn
    const homeBtn = this.add.image(343, 1138, "Home");
    pauseContainer.add(homeBtn);

    // playBtn
    const playBtn = this.add.image(737, 1137, "play");
    pauseContainer.add(playBtn);

    // text_1
    const text_1 = this.add.text(540, 956, "", {});
    text_1.setOrigin(0.5, 0.5);
    text_1.text = "TAP PLAY TO CONTINUE";
    text_1.setStyle({ "align": "center", "fontFamily": "Square_rough", "fontSize": "40px" });
    pauseContainer.add(text_1);

    // pauseScoreText
    const pauseScoreText = this.add.text(540, 1017, "", {});
    pauseScoreText.setOrigin(0.5, 0.5);
    pauseScoreText.text = "YOUR SCORE : 0";
    pauseScoreText.setStyle({ "align": "center", "fontFamily": "Square_rough", "fontSize": "40px" });
    pauseContainer.add(pauseScoreText);

    // settingsContainer
    const settingsContainer = this.add.container(0, -1220);

    // base
    const base = this.add.image(540, 960, "base");
    settingsContainer.add(base);

    // closeBtn
    const closeBtn = this.add.image(540, 1144, "Close");
    settingsContainer.add(closeBtn);

    // soundOnLogo
    const soundOnLogo = this.add.image(260, 950, "Sound_On_Icon");
    settingsContainer.add(soundOnLogo);

    // musicOnLogo
    const musicOnLogo = this.add.image(630, 950, "music_on_Icon");
    settingsContainer.add(musicOnLogo);

    // music_Sound_Bar_BASE
    const music_Sound_Bar_BASE = this.add.image(353, 1005, "Music&Sound_Bar_BASE");
    settingsContainer.add(music_Sound_Bar_BASE);

    // music_Sound_Bar_BASE_1
    const music_Sound_Bar_BASE_1 = this.add.image(720, 1005, "Music&Sound_Bar_BASE");
    settingsContainer.add(music_Sound_Bar_BASE_1);

    // sound
    const sound = this.add.image(370, 950, "sound");
    settingsContainer.add(sound);

    // music
    const music = this.add.image(740, 950, "music");
    settingsContainer.add(music);

    // plus
    const plus = this.add.image(497, 1003, "plus");
    settingsContainer.add(plus);

    // plus_1
    const plus_1 = this.add.image(867, 1003, "plus");
    settingsContainer.add(plus_1);

    // minus
    const minus = this.add.image(208, 1004, "minus");
    settingsContainer.add(minus);

    // minus_1
    const minus_1 = this.add.image(574, 1004, "minus");
    settingsContainer.add(minus_1);

    // soundLoadBar
    const soundLoadBar = this.add.image(232, 986, "bar");
    soundLoadBar.setOrigin(0, 0);
    settingsContainer.add(soundLoadBar);

    // musicLoadBar
    const musicLoadBar = this.add.image(600, 986, "bar");
    musicLoadBar.setOrigin(0, 0);
    settingsContainer.add(musicLoadBar);

    // soundSlider
    const soundSlider = this.add.image(455, 1005, "bar_button");
    settingsContainer.add(soundSlider);

    // musicSlider
    const musicSlider = this.add.image(822, 1005, "bar_button");
    settingsContainer.add(musicSlider);

    // score_Base
    const score_Base = this.add.image(540, 0, "Score_Base");
    score_Base.setOrigin(0.5, 0);

    // pauseButton
    const pauseButton = this.add.image(51, 62, "pause");

    // settingsButton
    const settingsButton = this.add.image(1032, 62, "setting");

    // ballsText
    const ballsText = this.add.text(700, 65, "", {});
    ballsText.setOrigin(0, 0.5);
    ballsText.text = "BALLS:-";
    ballsText.setStyle({ "fontFamily": "Square_rough", "fontSize": "40px" });

    // gameOverContainer
    const gameOverContainer = this.add.container(0, -1220);

    // base_1
    const base_1 = this.add.image(540, 960, "base_1");
    gameOverContainer.add(base_1);

    // replayBtn
    const replayBtn = this.add.image(539, 1148, "Replay");
    gameOverContainer.add(replayBtn);

    // text_2
    const text_2 = this.add.text(315, 960, "", {});
    text_2.setOrigin(0.5, 0.5);
    text_2.text = "BEST SCORE";
    text_2.setStyle({ "fontFamily": "Square_rough", "fontSize": "40px" });
    gameOverContainer.add(text_2);

    // text
    const text = this.add.text(767, 960, "", {});
    text.setOrigin(0.5, 0.5);
    text.text = "YOUR SCORE";
    text.setStyle({ "fontFamily": "Square_rough", "fontSize": "40px" });
    gameOverContainer.add(text);

    // levelFailBest
    const levelFailBest = this.add.text(310, 1010, "", {});
    levelFailBest.setOrigin(0.5, 0.5);
    levelFailBest.text = "0";
    levelFailBest.setStyle({ "fontFamily": "Square_rough", "fontSize": "40px" });
    gameOverContainer.add(levelFailBest);

    // levelFailScore
    const levelFailScore = this.add.text(780, 1010, "", {});
    levelFailScore.setOrigin(0.5, 0.5);
    levelFailScore.text = "0";
    levelFailScore.setStyle({ "fontFamily": "Square_rough", "fontSize": "40px" });
    gameOverContainer.add(levelFailScore);

    // levelFailBg
    const levelFailBg = this.add.image(540, 960, "panel");
    levelFailBg.visible = false;
    levelFailBg.alpha = 0.5;
    levelFailBg.alphaTopLeft = 0.5;
    levelFailBg.alphaTopRight = 0.5;
    levelFailBg.alphaBottomLeft = 0.5;
    levelFailBg.alphaBottomRight = 0.5;

    // menuContainer
    const menuContainer = this.add.container(0, 0);

    this.ballCollector = ballCollector;
    this.homeBtn = homeBtn;
    this.playBtn = playBtn;
    this.pauseScoreText = pauseScoreText;
    this.pauseContainer = pauseContainer;
    this.closeBtn = closeBtn;
    this.soundOnLogo = soundOnLogo;
    this.musicOnLogo = musicOnLogo;
    this.soundLoadBar = soundLoadBar;
    this.musicLoadBar = musicLoadBar;
    this.soundSlider = soundSlider;
    this.musicSlider = musicSlider;
    this.settingsContainer = settingsContainer;
    this.pauseButton = pauseButton;
    this.settingsButton = settingsButton;
    this.ballsText = ballsText;
    this.replayBtn = replayBtn;
    this.levelFailBest = levelFailBest;
    this.levelFailScore = levelFailScore;
    this.gameOverContainer = gameOverContainer;
    this.levelFailBg = levelFailBg;
    this.menuContainer = menuContainer;

    this.events.emit("scene-awake");
  }

  /** @type {Phaser.GameObjects.Image} */
  ballCollector;
  /** @type {Phaser.GameObjects.Image} */
  homeBtn;
  /** @type {Phaser.GameObjects.Image} */
  playBtn;
  /** @type {Phaser.GameObjects.Text} */
  pauseScoreText;
  /** @type {Phaser.GameObjects.Container} */
  pauseContainer;
  /** @type {Phaser.GameObjects.Image} */
  closeBtn;
  /** @type {Phaser.GameObjects.Image} */
  soundOnLogo;
  /** @type {Phaser.GameObjects.Image} */
  musicOnLogo;
  /** @type {Phaser.GameObjects.Image} */
  soundLoadBar;
  /** @type {Phaser.GameObjects.Image} */
  musicLoadBar;
  /** @type {Phaser.GameObjects.Image} */
  soundSlider;
  /** @type {Phaser.GameObjects.Image} */
  musicSlider;
  /** @type {Phaser.GameObjects.Container} */
  settingsContainer;
  /** @type {Phaser.GameObjects.Image} */
  pauseButton;
  /** @type {Phaser.GameObjects.Image} */
  settingsButton;
  /** @type {Phaser.GameObjects.Text} */
  ballsText;
  /** @type {Phaser.GameObjects.Image} */
  replayBtn;
  /** @type {Phaser.GameObjects.Text} */
  levelFailBest;
  /** @type {Phaser.GameObjects.Text} */
  levelFailScore;
  /** @type {Phaser.GameObjects.Container} */
  gameOverContainer;
  /** @type {Phaser.GameObjects.Image} */
  levelFailBg;
  /** @type {Phaser.GameObjects.Container} */
  menuContainer;

  /* START-USER-CODE */

  // Write more your code here

  create() {
    this.editorCreate()
    this.createMenu();
    
    this.currentBlockRow = 1;
    this.oGameManager = new GameManager(this);
    this.oSoundManager = new SoundManager(this);
    this.backgroundMusic = this.sound.add('bg', { loop: true });
    this.backgroundMusic.play();

    this.input.setDefaultCursor('default')
    this.pointerOverOut();

    this.scoreText = null
    this.gameState = WAITING_FOR_PLAYER_INPUT
    this.gameOver = false
    this.level = 0
    this.recycledBlocks = []
    this.blockSize = this.game.config.width / this.oGameManager.blocksPerLine
    this.gameFieldHeight = this.blockSize * this.oGameManager.blockLines
    this.emptySpace = this.game.config.height - this.gameFieldHeight
    this.physics.world.setBounds(
      0,
      this.emptySpace / 2,
      this.game.config.width,
      this.gameFieldHeight
    )

    this.blockGroup = this.physics.add.group()
    this.ballGroup = this.physics.add.group()
    this.extraBallGroup = this.physics.add.group()

    this.bottomPanel = this.add.sprite(
      this.game.config.width / 2,
      this.game.config.height,
      'panel'
    )

    this.bottomPanel.displayWidth = this.game.config.width
    this.bottomPanel.displayHeight = this.emptySpace / 2
    this.bottomPanel.setOrigin(0.5, 1)
    this.bottomPanel.setAlpha(0)

    this.ballSize = this.game.config.width * this.oGameManager.ballSize

    this.addBall(
      this.game.config.width / 2,
      this.game.config.height - this.bottomPanel.displayHeight - this.ballSize / 2,
      false
    )
    this.addTrajectory()
    this.addBlockLine()

    this.input.on('pointerdown', this.startAiming, this)
    this.input.on('pointerup', this.shootBall, this)
    this.input.on('pointermove', this.adjustAim, this)

    this.gameOverContainer.setDepth(1);
    this.scores();
    this.ballCounts();

    // Ball holder
    // console.log(this.ballGroup.getChildren()[0].x,  this.ballGroup.getChildren()[0].y)
    // this.ballHolder = this.add.image( this.ballGroup.getChildren()[0].x,  this.ballGroup.getChildren()[0].y, "Ball_Holder");

    this.pauseBtn();
    this.settingsBtn();

    this.physics.world.on('worldbounds', this.checkBoundCollision, this);
    this.input.on('pointerdown', this.handleTap, this);

    this.musicSlideBar();
    this.soundSlideBar();
    // this.ballCollect();
  }

  createMenu() {
    let tap = this.add.sprite(1080 / 2, 1920 - 170, "tap");
    tap.setOrigin(0.5);
    this.menuContainer.add(tap);

    let tapTween = this.tweens.add({
      targets: tap,
      y: 1900,
      alpha: 0,
      duration: 1000,
      ease: 'Cubic.InOut',
      repeat: -1
    });
  }
  handleTap() {
    this.ballCollector.setVisible(true);
    if (this.menuContainer !== null) {
      this.menuContainer.getAll().forEach(item => {
        item.destroy();
      })
    }
  }

  addBall(x, y, isExtraBall) {
    let ball = isExtraBall
      ? this.extraBallGroup.create(x, y, 'ball').setOrigin(0.5, 0.5)
      : this.ballGroup.create(x, y, 'ball').setOrigin(0.5, 0.5)

    ball.displayWidth = this.ballSize
    ball.displayHeight = this.ballSize

    ball.body.setBounce(1, 1)
    if (isExtraBall) {
      // this.ballRing = this.add.image(x, y, 'ballRing').setOrigin(0.5, 0.5);
      // this.ballRing.setScale(0.5);
      ballRing = this.add.image(x, y, 'ballRing').setOrigin(0.5, 0.5);
      ballRing.setScale(0.5);

      this.tweens.add({
        targets: ballRing,
        scale: 0.7,
        duration: 500,
        ease: 'Linear',
        yoyo: true,
        repeat: -1,
      })

      ball.ballRing = ballRing;
      ball.row = 1
      ballRing.row = 1;
      ball.collected = false
    } else {
      ball.body.collideWorldBounds = true
      ball.body.onWorldBounds = true
    }
  }

  addBlockLine() {
    this.level++
    let placedBlocks = []

    let placeExtraBall =
      Phaser.Math.Between(0, 100) < this.oGameManager.extraBallProbability

    for (let i = 0; i < this.oGameManager.maxBlocksPerLine; i++) {
      let blockPosition = Phaser.Math.Between(
        0,
        this.oGameManager.blocksPerLine - 1
      )

      if (placedBlocks.indexOf(blockPosition) == -1) {
        placedBlocks.push(blockPosition)

        if (placeExtraBall) {
          placeExtraBall = false
          this.addBall(
            blockPosition * this.blockSize + this.blockSize / 2,
            this.blockSize / 2 + this.emptySpace / 2,
            true
          )
        } else {
          if (this.recycledBlocks.length == 0) {
            this.addBlock(
              blockPosition * this.blockSize + this.blockSize / 2,
              this.blockSize / 2 + this.emptySpace / 2,
              false
            )
          } else {
            this.addBlock(
              blockPosition * this.blockSize + this.blockSize / 2,
              this.blockSize / 2 + this.emptySpace / 2,
              true
            )
          }
        }
      }
    }
  }

  addBlock(x, y, isRecycled) {
    const blockesArray = [
      'block-1',
      'block-2',
      'block-3',
      'block-4',
      'block-5',
      'block-6',
      'block-7',
      'block-8',
      'block-9',
      'block-10',
      'block-11',
      'block-12'
    ]
    
    let block = isRecycled
      ? this.recycledBlocks.shift()
      // : this.blockGroup.create(x, y, Phaser.Math.RND.pick(blockesArray))
      : this.blockGroup.create(x, y, this.getRandomElement(blockesArray));

    block.displayWidth = this.blockSize
    block.displayHeight = this.blockSize
    block.value = this.level
    block.row = 1

    if (isRecycled) {
      block.x = x
      block.y = y
      block.text.setText(block.value)
      block.text.x = block.x
      block.text.y = block.y
      block.setVisible(true)
      block.text.setVisible(true)
      this.blockGroup.add(block)
    } else {
      let text = this.add.text(block.x, block.y, block.value, {
        // font: 'bold 32px Arial',
        fontFamily: 'Square_rough',
        fontSize: '50px',
        align: 'center',
        color: '#ffffff'
      })
      text.setOrigin(0.5)
      block.text = text
    }
    block.body.immovable = true
  }

  getRandomElement(array) {
    if (array && array.length > 0) {
      const randomIndex = Math.floor(Math.random() * array.length);
      return array[randomIndex];
    } else {
      return null; // Handle empty or null array
    }
  }

  getBallPosition() {
    let children = this.ballGroup.getChildren()
    return {
      x: children[0].x,
      y: children[0].y
    }
  }

  addTrajectory() {
    let ballPosition = this.getBallPosition()
    this.trajectory = this.add.sprite(
      ballPosition.x,
      ballPosition.y,
      'trajectory'
    )
    this.trajectory.setOrigin(0.5, 1)
    // this.trajectory.setVisible(false)
  }

  startAiming() {
    if (this.gameState == WAITING_FOR_PLAYER_INPUT) {
      this.legalAngleOfFire = false
      this.gameState = PLAYER_IS_AIMING
      this.trajectory.x = this.getBallPosition().x
      this.trajectory.y = this.getBallPosition().y
    }
  }

  adjustAim(e) {
    if (this.gameState == PLAYER_IS_AIMING) {
      let distX = e.x - e.downX
      let distY = e.y - e.downY

      // if (distY > 10) {
      if (distY > 10) {
        this.legalAngleOfFire = true
        this.trajectory.setVisible(true)
        this.direction = Phaser.Math.Angle.Between(e.x, e.y, e.downX, e.downY)
        this.trajectory.angle = Phaser.Math.RadToDeg(this.direction) + 90
      } else {
        this.legalAngleOfFire = false

        this.trajectory.setVisible(false)
      }
    }
  }

  shootBall() {
    if (this.gameState == PLAYER_IS_AIMING) {
      this.trajectory.setVisible(false)
      this.ballCountText.setVisible(false);

      if (this.legalAngleOfFire) {
        this.gameState = BALLS_ARE_RUNNING
        this.ballCollector.setAlpha(1);
        this.ballCollect();
        this.landedBalls = 0

        let angleOfFire = Phaser.Math.DegToRad(this.trajectory.angle - 90)

        this.ballGroup.getChildren().forEach((ball, index) => {
          this.time.addEvent({
            delay: 100 * index,
            callback: () => {
              // Adjust the ball speed based on the ballCount
              let adjustedSpeed = this.oGameManager.ballSpeed;

              // Use switch for better readability
              switch (true) {
                case this.ballCount < 3:
                  adjustedSpeed *= 1.1; // Increase speed slightly
                  break;
                case this.ballCount >= 3 && this.ballCount < 6:
                  adjustedSpeed *= 1.5; // Adjust speed for 3 to 5 balls
                  break;
                case this.ballCount >= 6 && this.ballCount < 9:
                  adjustedSpeed *= 1.9; // Adjust speed for 6 to 8 balls
                  break;
                case this.ballCount >= 9 && this.ballCount < 12:
                  adjustedSpeed *= 2.3;
                  break;
                case this.ballCount >= 12:
                  adjustedSpeed *= 2.7;
                  break;
                // Add more cases as needed
                default:
                // Use the default speed
              }

              ball.body.setVelocity(
                adjustedSpeed * Math.cos(angleOfFire),
                adjustedSpeed * Math.sin(angleOfFire)
              );
            },
          });
        });
      } else {
        this.gameState = WAITING_FOR_PLAYER_INPUT;
      }
    }
  }

  checkBoundCollision(ball, up, down, left, right) {
    if (down && this.gameState == BALLS_ARE_RUNNING) {
      
      ball.setVelocity(0)
      this.landedBalls++
      if (this.landedBalls == 1) {
        this.firstBallToLand = ball
        console.log("ball is landed")
        this.ballCollector.setAlpha(0.5);
        this.ballCollector.disableInteractive();

        // this.ballCountText.setVisible(true);
        this.ballCountText.x = this.ballGroup.getChildren()[0].x + 80;
        this.ballCountText.y = this.ballGroup.getChildren()[0].y;

      }
    }
  }

  updateBallRingPositions() {
    this.extraBallGroup.getChildren().forEach(extraBall => {
      if (!extraBall.collected) {
        extraBall.ballRing.setPosition(extraBall.x, extraBall.y);
      }
    });
  }

  update() {
    if (
      this.gameState == ARCADE_PHYSICS_IS_UPDATING ||
      (this.gameState == BALLS_ARE_RUNNING &&
        this.landedBalls == this.ballGroup.getChildren().length)
    ) {
      if (this.gameState == BALLS_ARE_RUNNING) {
        
        this.gameState = ARCADE_PHYSICS_IS_UPDATING
      } else {
        this.gameState = PREPARING_FOR_NEXT_MOVE
        this.moveBlocks()
        this.moveBalls()
        this.moveExtraBalls()
      }
    }

    if (this.gameState == BALLS_ARE_RUNNING) {
      this.handleBallVsBlock()

      this.handleBallVsExtra()
      this.updateBallRingPositions();
    }
    // this.updateBallRingPosition();
  }

  moveBlocks() {
    this.extraBallGroup.getChildren().forEach(extraBall => {
      extraBall.ballRing.setVisible(false); // Hide the ballRing for each extraBall
    });
    this.tweens.add({
      targets: this.blockGroup.getChildren(),
      props: {
        y: {
          getEnd: function (target) {
            return target.y + target.displayHeight
          }
        }
      },
      callbackScope: this,
      onUpdate: function (tween, target) {
        target.text.y = target.y
      },

      onComplete: function () {
        this.gameState = WAITING_FOR_PLAYER_INPUT

        Phaser.Actions.Call(
          this.blockGroup.getChildren(),
          function (block) {
            block.row++

            if (block.row == this.oGameManager.blockLines) {
              this.gameOver = true
            }
          },
          this
        )

        if (!this.gameOver) {
          score += 1
          this.scoreText.setText(score);
          this.pauseScoreText.setText("YOUR SCORE : " + score);
          this.levelFailScore.setText(score);

          if (score > bestScore) {
            bestScore = score
            localStorage.setItem('bestScore', bestScore);
            this.levelFailBest.setText(bestScore);
          }
          this.addBlockLine()
          this.extraBallGroup.getChildren().forEach(extraBall => {
            extraBall.ballRing.setVisible(true);
          });
        } else {
          this.physics.pause();
          this.levelFailBg.setDepth(1);
          this.levelFailBg.setVisible(true);
          this.levelFailBest.setText(localStorage.getItem('bestScore'));

          this.tweens.add({
            targets: this.gameOverContainer,
            y: 0,
            duration: 1000,
            onComplete: () => {
              this.replayBtn.setInteractive().on('pointerdown', () => {
                this.scene.restart('Level');
              });
            }
          })
          // this.scene.stop('Level')
          // this.scene.start('GameOver')
        }
      },
      duration: 500,
      ease: 'Cubic.easeInOut'
    })
  }

  moveBalls() {
    this.tweens.add({
      targets: this.ballGroup.getChildren(),
      x: this.firstBallToLand.gameObject.x,
      onComplete: () => {
        this.updateBallRingPositions(); // Update ballRing positions after the tween completes
      },
      duration: 500,
      ease: 'Cubic.easeInOut'
    })
  }

  moveExtraBalls() {

    Phaser.Actions.Call(this.extraBallGroup.getChildren(), ball => {
      if (ball.row === undefined) {
        ball.row = 1;
        ball.collected = false;
      }
      if (ball.collected) {
        ball.row++;
        ball.ballRing.row++;
      }
    });


    this.tweens.add({
      targets: this.extraBallGroup.getChildren(),
      props: {
        x: {
          getEnd: function (target) {
            if (target.collected) {
              return target.scene.firstBallToLand.gameObject.x;
            }

            return target.x;
          }
        },

        y: {
          getEnd: function (target) {
            if (target.collected) {
              return target.scene.firstBallToLand.gameObject.y;
            }
            return target.y + target.scene.blockSize;
          }
        }
      },

      callbackScope: this,

      onComplete: function () {

        Phaser.Actions.Call(
          this.extraBallGroup.getChildren(),
          function (ball) {
            if (!ball.collected) {
              ball.row++;
              ball.ballRing.row++;
            } else {
              this.extraBallGroup.remove(ball);
              this.ballGroup.add(ball);
              ball.body.collideWorldBounds = true;
              ball.body.onWorldBounds = true;
              ball.body.setBounce(1, 1);
            }
          },
          this
        );
      },
      duration: 500,
      ease: 'Cubic.easeInOut'
    });
  }

  ballCollect() {
    // if (this.gameState = BALLS_ARE_RUNNING) {
      this.ballCollector.setInteractive().on('pointerdown', () => {
        this.ballCollector.setAlpha(0.5);
        this.ballCollector.disableInteractive();
        this.tweens.add({
          targets: this.ballCollector,
          scaleX: 0.9,
          scaleY: 0.9,
          duration: 80,
          yoyo: true,
          // onComplete: () => {
          // }
        });
        const targetX = this.this.game.config.width / 2;
        const targetY = 1709.8;

        // Use tweens to move all the balls to the center
        this.tweens.add({
          targets: this.ballGroup.getChildren(),
          x: targetX,
          y: targetY,
          duration: 500,
          ease: "Cubic.easeInOut",
          onComplete: () => {
            // Additional logic after balls reach the center, if needed
            this.ballGroup.getChildren().forEach((ball) => {
              ball.body.setVelocity(0);
              this.gameState = WAITING_FOR_PLAYER_INPUT;
              // this.gameState = PLAYER_IS_AIMING;
            });
          }
        });
      });
    // }

  }

  handleBallVsBlock() {
    this.physics.world.collide(
      this.ballGroup,
      this.blockGroup,
      function (ball, block) {
        block.value--
        if (block.value == 0) {
          this.recycledBlocks.push(block)
          this.blockGroup.remove(block)
          block.visible = false
          block.text.visible = false
        } else {
          block.text.setText(block.value)
        }
      },
      null,
      this
    )
  }

  handleBallVsExtra(ball, extraBall) {
    // if (extraBall.collected == false){
    //   this.ballRing.x = ball.x;
    //   this.ballRing.y = ball.y;
    // }
    this.physics.world.overlap(
      this.ballGroup,
      this.extraBallGroup,
      function (ball, extraBall) {
        if (!extraBall.collected) {
          extraBall.collected = true
          // ballRing.destroy();
          if (extraBall.ballRing) {
            extraBall.ballRing.destroy();
          }
          this.ballCount++
          // this.ballCountText.setText('x' + this.ballCount)
          this.ballsText.setText('BALLS:- ' + this.ballCount)
          this.tweens.add({
            targets: extraBall,
            y:
              this.game.config.height -
              this.bottomPanel.displayHeight -
              extraBall.displayHeight / 2,
            duration: 200,
            ease: 'Cubic.easeOut'
          })
        }
      },
      null,
      this
    )
  }

  soundSlideBar() {
    let backgroundSoundVolume = 0;
    let isMoveSound = false;
    // let isMoveMusic = false;
    const soundMask = this.make.graphics();
    soundMask.fillRect(232, 986, 240, 36);
    const mask1 = soundMask.createGeometryMask();
    this.soundLoadBar.setMask(mask1);

    this.soundSlider.x = (backgroundSoundVolume * 200) + 455;
    soundMask.x = this.soundSlider.x - 480;

    this.soundSlider.setInteractive().on('pointerdown', () => {
      isMoveSound = true;
      this.input.on('pointermove', (pointer) => {
        if (isMoveSound && pointer.isDown) {
          backgroundSoundVolume = ((this.soundSlider.x - 252) / 203).toFixed(2);
          if (backgroundSoundVolume == 0) {
            this.soundOnLogo.setTexture("Sound_Off_Icon");
          } else {
            this.soundOnLogo.setTexture("Sound_On_Icon");
          }
          // console.log(backgroundSoundVolume);
          soundMask.x = this.soundSlider.x - 480;
          this.soundSlider.x = pointer.x;
          this.soundSlider.x = Phaser.Math.Clamp(this.soundSlider.x, 252, 455);
        }
      })
    })

    this.input.on('pointerup', () => {
      isMoveSound = false;
      // isMoveMusic = false;
    })
  }

  musicSlideBar() {
    let backgroundMusicVolume = 0;
    // let isMoveSound = false;
    let isMoveMusic = false;
    const musicMask = this.make.graphics();
    musicMask.fillRect(232, 986, 240, 36);
    const mask2 = musicMask.createGeometryMask();
    this.musicLoadBar.setMask(mask2);

    this.musicSlider.x = (backgroundMusicVolume * 200) + 821;
    musicMask.x = this.musicSlider.x - 480;

    this.musicSlider.setInteractive().on('pointerdown', () => {
      isMoveMusic = true;
      this.input.on('pointermove', (pointer) => {
        if (isMoveMusic && pointer.isDown) {
          backgroundMusicVolume = ((this.musicSlider.x - 620) / 202).toFixed(2);
          this.backgroundMusic.volume = backgroundMusicVolume;
          if (backgroundMusicVolume == 0) {
            this.musicOnLogo.setTexture("music_off_Icon");
          } else {
            this.musicOnLogo.setTexture("music_on_Icon");
          }
          // console.log(backgroundMusicVolume);
          musicMask.x = this.musicSlider.x - 480;
          this.musicSlider.x = pointer.x;
          this.musicSlider.x = Phaser.Math.Clamp(this.musicSlider.x, 620, 822);
        }
      })
    })

    this.input.on('pointerup', () => {
      // isMoveSound = false;
      isMoveMusic = false;
    })
  }

  scores() {
    // Score
    this.scoreText = this.add.text(540, 15, '0', {
      fontFamily: 'Square_rough',
      fontSize: '80px',
      align: 'center',
      color: '#fbfafaff'
    })
    this.scoreText.setOrigin(0.5, 0)

    // Best score
    bestScore = localStorage.getItem('bestScore') || 0
    this.bestScoreText = this.add.text(140, 60, 'BEST:- ' + bestScore, {
      fontFamily: 'Square_rough',
      fontSize: '40px',
      align: 'center',
      color: '#fbfafaff'
    })
    this.bestScoreText.setOrigin(0, 0.5)
  }

  ballCounts() {
    // Ball count
    this.ballCount = 1
    this.ballCountText = this.add.text(
      this.ballGroup.getChildren()[0].x + 80,
      this.ballGroup.getChildren()[0].y - 15,
      'x' + this.ballCount,
      {
        fontFamily: 'Square_rough',
        fontSize: '30px',
        align: 'center',
        color: '#fbfafaff'
      }
    )
    this.ballCountText.setOrigin(0.5, 0)
    this.ballsText.setText('BALLS:- ' + this.ballCount)
    this.ballCountText.setVisible(false);
  }

  pauseBtn() {
    // Pause button
    this.pauseContainer.setDepth(1)
    this.pauseButton.setInteractive().on('pointerdown', () => {
      this.pauseButton.setAlpha(0.5)
      this.physics.pause()
      this.settingsButton.disableInteractive()
      this.tweens.add({
        targets: this.pauseContainer,
        y: 0,
        duration: 500,
        onComplete: () => {
          this.playBtn.setInteractive().on('pointerdown', () => {
            this.pauseButton.setAlpha(1)
            this.physics.resume()
            this.settingsButton.setInteractive()
            this.tweens.add({
              targets: this.pauseContainer,
              y: -1220,
              duration: 500
            })
          })
          this.homeBtn.setInteractive().on('pointerdown', () => {
            this.scene.stop('Level')
            this.scene.start('Home')
          })
        }
      })
    })
  }

  settingsBtn() {
    // Settings button
    this.settingsContainer.setDepth(1)
    this.settingsButton.setInteractive().on('pointerdown', () => {
      this.settingsButton.setAlpha(0.5)
      this.physics.pause()
      this.pauseButton.disableInteractive()
      this.tweens.add({
        targets: this.settingsContainer,
        y: 0,
        duration: 500,
        onComplete: () => {
          this.closeBtn.setInteractive().on('pointerdown', () => {
            this.tweens.add({
              targets: this.settingsContainer,
              y: -1220,
              duration: 500
            })
            this.settingsButton.setAlpha(1);
            this.physics.resume();
            this.pauseButton.setInteractive()
          });
        }
      })
    })
  }

  pointerOverOut() {
    this.pointerOver = (aBtn, scale) => {
      this.input.setDefaultCursor('pointer')
      this.tweens.add({
        targets: aBtn,
        scaleX: scale + 0.05,
        scaleY: scale + 0.05,
        duration: 50
      })
    }
    this.pointerOut = (aBtn, scale) => {
      this.input.setDefaultCursor('default')
      this.tweens.add({
        targets: aBtn,
        scaleX: scale,
        scaleY: scale,
        duration: 50,
        onComplete: () => {
          aBtn.forEach(btn => {
            btn.setScale(scale)
          })
        }
      })
    }

    this.pauseButton.on('pointerover', () =>
      this.pointerOver([this.pauseButton], 1)
    )
    this.pauseButton.on('pointerout', () =>
      this.pointerOut([this.pauseButton], 1)
    )
    this.playBtn.on('pointerover', () =>
      this.pointerOver([this.playBtn], 1)
    )
    this.playBtn.on('pointerout', () =>
      this.pointerOut([this.playBtn], 1)
    )
    this.homeBtn.on('pointerover', () => this.pointerOver([this.homeBtn], 1))
    this.homeBtn.on('pointerout', () => this.pointerOut([this.homeBtn], 1))

    this.ballCollector.on("pointerover", () => this.pointerOver([this.ballCollector], 1));
    this.ballCollector.on("pointerout", () => this.pointerOut([this.ballCollector], 1));

    this.settingsButton.on('pointerover', () =>
      this.pointerOver([this.settingsButton], 1)
    )
    this.settingsButton.on('pointerout', () =>
      this.pointerOut([this.settingsButton], 1)
    )
    this.closeBtn.on('pointerover', () =>
      this.pointerOver([this.closeBtn], 1)
    )
    this.closeBtn.on('pointerout', () =>
      this.pointerOut([this.closeBtn], 1)
    )
    this.replayBtn.on('pointerover', () =>
      this.pointerOver([this.replayBtn], 1)
    )
    this.replayBtn.on('pointerout', () =>
      this.pointerOut([this.replayBtn], 1)
    )
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
