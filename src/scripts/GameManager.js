export default class GameManager {
  constructor(oScene) {
    this.oScene = oScene;
    
    this.ballSize = 0.04;
    this.ballSpeed = 1000;
    this.blocksPerLine = 7;
    this.blockLines = 10;
    this.maxBlocksPerLine = 4;
    this.extraBallProbability = 60;
  }
}
