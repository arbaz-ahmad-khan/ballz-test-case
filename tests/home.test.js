import Home from '../src/scenes/Home.js';
describe('Home Scene', () => {
    let home = null;

    beforeEach(() => {
        home = new Home();
        // home.pointerOut = jest.fn();
        home.add = {
            image: jest.fn().mockReturnValue({
                setInteractive: jest.fn().mockReturnThis(),
                on: jest.fn(),
            }),
            sprite: jest.fn().mockReturnValue({
                setInteractive: jest.fn().mockReturnThis(),
                on: jest.fn(),
            }),
            // sprite: jest.fn().mockReturnThis(),
            container: jest.fn().mockReturnValue({
                add: jest.fn(),
                getAll: jest.fn().mockReturnValue([]),
            }),
            rectangle: jest.fn().mockReturnValue({
                visible: true,
            }),
            group: jest.fn().mockReturnValue({
                // ... mock the methods and properties used in boxGroup
            }),
        };
        home.events = {
            emit: jest.fn(),
        };
        home.physics = {
            add: {
                sprite: jest.fn().mockReturnValue({
                    setScale: jest.fn().mockReturnThis(),
                    setVelocityY: jest.fn(),
                    setVelocityX: jest.fn(),
                    setBounce: jest.fn(),
                }),
                collider: jest.fn(),
            },
        };
        home.playBtn = {
            setInteractive: jest.fn().mockReturnThis(),
            on: jest.fn(),
        };
        home.input = {
            setDefaultCursor: jest.fn(),
        };
        home.tweens = {
            add: jest.fn(),
        };
        home.pointerOver = jest.fn();
        home.pointerOut = jest.fn();
        home.create();
    });
    test('boxGroup is created', () => {
        expect(home.boxGroup).toBeDefined();
    });

    test('ball is created', () => {
        expect(home.ball).toBeDefined();
    });

    test('ball has correct properties', () => {
        expect(home.ball.setScale).toHaveBeenCalledWith(0.5);
        expect(home.ball.setVelocityY).toHaveBeenCalledWith(-340);
        expect(home.ball.setVelocityX).toHaveBeenCalledWith(-190);
        expect(home.ball.setBounce).toHaveBeenCalledWith(1, 1);
    });

    test('playBtn is interactive', () => {
        expect(home.playBtn.setInteractive).toHaveBeenCalled();
    });

    test('pointerOver function works correctly', () => {
        const mockBtn = { setScale: jest.fn() };
        home.pointerOver([mockBtn], 1);
        expect(home.input.setDefaultCursor).toHaveBeenCalledWith('pointer');
        expect(home.tweens.add).toHaveBeenCalled();
    });

    test('pointerOut function works correctly', () => {
        const mockBtn = { setScale: jest.fn() };
        home.pointerOut([mockBtn], 1);
        expect(home.input.setDefaultCursor).toHaveBeenCalledWith('default');
        expect(home.tweens.add).toHaveBeenCalled();
    });
});