function Game(player) {
    this.player = player;
}

Game.prototype = {
    frameNumber: function(){
        if (this.player.score.frameScores.length == this.player.score.lastFrameNumber) {
            return (this.player.score.lastFrameNumber + 1);
        } else if (this.player.score.rollingFrame > this.player.score.lastFrameNumber) {
            return this.player.score.lastFrameNumber;
        } else {
            return this.player.score.rollingFrame;
        }
    },
    gameIsOver: function(){
        return (this.frameNumber() > this.player.score.lastFrameNumber);  
    }
}