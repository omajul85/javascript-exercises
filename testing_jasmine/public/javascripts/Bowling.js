function Game() {
}

Game.prototype = {
    rolls: [],
    current_roll: 0,
    roll: function(pins){
        this.rolls[this.current_roll] = pins;
        this.current_roll++;
    },
    score: function() {
        var score = 0;
        var frame_index = 0;
        for (var frame = 0; frame < 10; frame++) {
            if (this.is_strike(frame_index)) {
                score += 10 + this.strike_bonus(frame_index);
                frame_index += 1;
            } else if (this.is_spare(frame_index)) {
                score += 10 + this.spare_bonus(frame_index);
                frame_index += 2;
            } else {
                score += this.sum_balls_in_frame(frame_index);
                frame_index += 2;
            }
        }
        console.log(score);
        return score;
    },
    is_strike: function(frame_index) {
        return (this.rolls[frame_index] == 10);
    },
    is_spare: function(frame_index) {
        return (this.rolls[frame_index] + this.rolls[frame_index+1] == 10);
    },
    sum_balls_in_frame: function(frame_index) {
        return (this.rolls[frame_index] + this.rolls[frame_index+1]);
    },
    strike_bonus: function(frame_index) {
        return (this.rolls[frame_index+1] + this.rolls[frame_index+2]);
    },
    spare_bonus: function(frame_index) {
        return (this.rolls[frame_index+2]);
    }
};

// var g = new Game();
// g.roll(5);
// g.roll(5);
// for (var i = 0; i < 18; i++) {
//     g.roll(0);
// }
// document.getElementById("demo").innerHTML = g.score();