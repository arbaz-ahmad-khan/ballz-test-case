export default class SoundManager {
    constructor(oScene){
        this.oScene = oScene;
        this.backgroundSound = this.oScene.sound.add("bg");
    }

    playSound(key, loop){
        key.play();
        key.loop = loop;
    }
    
    stopSound(key, loop){
        key.stop();
        key.loop = loop;
    }

    setBgVolumn(volume){
        this.backgroundSound.volume = volume;
    }
}

