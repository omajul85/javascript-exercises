function Scorer() {
}

Scorer.prototype = {
    rolls: [],
    frameScores: [],
    totalScore: 0,
    lastBallRolled: 0,
    firstBallInFrame: 0,
    lastFrameNumber: 10,
    rollingFrame: 1,
    state: "BALL_1",
    roll: function(b){
        this.rolls.push(b);
        switch(this.state){
            case "BALL_1":
                if (b < 10) {
                    this.firstBallInFrame = b;
                    this.state = "BALL_2";
                } else {
                    this.rollingFrame += 1;
                    this.state = "STRIKE_1";
                }
                break;
            case "BALL_2":
                this.rollingFrame += 1;
                if (this.firstBallInFrame + b == 10) {
                    this.state = "SPARE_1";
                } else {
                    this.addScoreInFrame(this.firstBallInFrame + b);
                    this.state = "BALL_1";
                }
                break;
            case "STRIKE_1":
                if (b == 10) {
                    this.rollingFrame += 1;
                    this.state = "STRIKES_X2";
                } else {
                    this.firstBallInFrame = b;
                    this.state = "STRIKE_2";
                }
                break;
            case "STRIKES_X2":
                this.addScoreInFrame(20 + b);
                if (b == 10) {
                    this.rollingFrame += 1;
                } else {
                    this.firstBallInFrame = b;
                    this.state = "STRIKE_2";
                }
                break;
            case "STRIKE_2":
                this.addScoreInFrame(this.firstBallInFrame + 10 + b);
                this.rollingFrame += 1;
                if (this.firstBallInFrame + b == 10) {
                    this.state = "SPARE_1";
                } else {
                    this.addScoreInFrame(this.firstBallInFrame + b);
                    this.state = "BALL_1";
                }
                break;
            case "SPARE_1":
                this.addScoreInFrame(10 + b);
                if (b < 10) {
                    this.firstBallInFrame = b;
                    this.state = "BALL_2";
                } else {
                    this.rollingFrame += 1;
                    this.state = "STRIKE_1";
                }
                break;
        }
        // console.log(this.totalScore);
        return this.frameScores;
    },
    frameNumber: function(){
        if (this.frameScores.length == this.lastFrameNumber) {
            return (this.lastFrameNumber + 1);
        } else if (this.rollingFrame > this.lastFrameNumber) {
            return this.lastFrameNumber;
        } else {
            return this.rollingFrame;
        }
    },
    addScoreInFrame: function(value){
        if (this.frameScores.length < this.lastFrameNumber) {
            this.totalScore += value;
            this.frameScores.push(this.totalScore);
        }  
    },
    gameIsOver: function(){
        return (this.frameNumber() > this.lastFrameNumber);  
    }
};

// var s = new Scorer();
// for (var i = 0; i < 20; i++) {
//     s.roll(1);
// }
// document.getElementById("rolls").innerHTML = s.rolls;
// document.getElementById("total-score").innerHTML = s.totalScore;