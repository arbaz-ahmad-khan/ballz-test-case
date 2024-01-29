// FILEPATH: /Users/yudizsolutionsltd/Documents/yudiztask/HTML5/Mini Games/ballz/tests/level.test.js

import Level from '../src/scenes/Level';
import GameManager from '../src/scripts/GameManager';
import SoundManager from '../src/scripts/SoundManager';

describe('Level Scene', () => {
    let level;

    beforeEach(() => {

        level = new Level();

        // Define blockesArray before the test runs
        level.game = {
            config: {
                width: 800,
                height: 600,
            },
        };
        level.add = {
            sprite: jest.fn().mockReturnValue({
                setOrigin: jest.fn().mockReturnThis(),
                setAlpha: jest.fn().mockReturnThis(),
                // ... other methods and properties used in tap
            }),
            image: jest.fn().mockReturnValue({
                setOrigin: jest.fn().mockReturnThis(),
                setScale: jest.fn().mockReturnThis(),
                alpha: 0.8,
                alphaTopLeft: 0.8,
                alphaTopRight: 0.8,
                alphaBottomLeft: 0.8,
                alphaBottomRight: 0.8,
                visible: false,
                setInteractive: jest.fn().mockReturnThis(),
                on: jest.fn(),
            }),
            text: jest.fn().mockReturnValue({
                setOrigin: jest.fn().mockReturnThis(),
                setStyle: jest.fn().mockReturnThis(),
                setText: jest.fn().mockReturnThis(),
                setVisible: jest.fn().mockReturnThis(),
                text: "0",
            }),
            container: jest.fn().mockReturnValue({
                add: jest.fn().mockReturnThis(),
                setDepth: jest.fn().mockReturnThis(),
                // ... other methods and properties used in pauseContainer
            }),
        };

        level.events = {
            emit: jest.fn(),
            // ... other mock setup
        };
        level.sound = {
            add: jest.fn().mockReturnThis(),
            play: jest.fn(),
        };
        level.tweens = {
            add: jest.fn(),
            // ... other mock setup
        };
        level.physics = {
            add: {
                group: jest.fn().mockReturnValue({
                    create: jest.fn().mockReturnValue({
                        setOrigin: jest.fn().mockReturnThis(),
                        body: {
                            setBounce: jest.fn().mockReturnThis(),
                        },
                    }),
                    getChildren: jest.fn().mockReturnValue([{
                        x: 0,
                        y: 0,
                        // ... other properties used in getBallPosition
                    }]),
                }),
            },
            world: {
                setBounds: jest.fn(),
                on: jest.fn(),
            },
        };
        level.input = {
            setDefaultCursor: jest.fn(),
            on: jest.fn(),
        };
        level.trajectory = {
            setOrigin: jest.fn().mockReturnThis(),
            setVisible: jest.fn().mockReturnThis(),
            // ... other methods and properties used in addTrajectory
        };
        level.make = {
            graphics: jest.fn().mockReturnValue({
                fillRect: jest.fn().mockReturnThis(),
                createGeometryMask: jest.fn().mockReturnThis(),
                // ... other methods and properties used in graphics
            }),
            // ... other methods and properties used in make
        };
        level.musicLoadBar = {
            setMask: jest.fn().mockReturnThis(),
            // ... other methods and properties used in musicLoadBar
        };

        level.create();
    });

    test('GameManager is created', () => {
        expect(level.oGameManager).toBeInstanceOf(GameManager);
    });

    test('SoundManager is created', () => {
        expect(level.oSoundManager).toBeInstanceOf(SoundManager);
    });

    test('backgroundMusic is created', () => {
        expect(level.backgroundMusic).toBeDefined();
    });

    test('blockGroup is created', () => {
        expect(level.blockGroup).toBeDefined();
    });

    test('ballGroup is created', () => {
        expect(level.ballGroup).toBeDefined();
    });

    test('extraBallGroup is created', () => {
        expect(level.extraBallGroup).toBeDefined();
    });

    test('bottomBase is created', () => {
        expect(level.add.image).toHaveBeenCalledWith(540, 1835, "bottomBase");
    });

    test('ballCollector is created', () => {
        expect(level.add.image).toHaveBeenCalledWith(540, 1838, "ballCollector");
    });

    test('pauseContainer is created', () => {
        expect(level.add.container).toHaveBeenCalledWith(0, -1220);
    });

    test('settingsContainer is created', () => {
        expect(level.add.container).toHaveBeenCalledWith(0, -1220);
    });

    test('score_Base is created', () => {
        expect(level.add.image).toHaveBeenCalledWith(540, 0, "Score_Base");
    });

    test('pauseButton is created', () => {
        expect(level.add.image).toHaveBeenCalledWith(51, 62, "pause");
    });

    test('settingsButton is created', () => {
        expect(level.add.image).toHaveBeenCalledWith(1032, 62, "setting");
    });

    test('ballsText is created', () => {
        expect(level.add.text).toHaveBeenCalledWith(700, 65, "", {});
    });

    test('gameOverContainer is created', () => {
        expect(level.add.container).toHaveBeenCalledWith(0, -1220);
    });
});