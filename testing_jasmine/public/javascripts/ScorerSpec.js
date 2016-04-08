describe("Scorer", function(){
    var s;
    
    var roll_many = function(n, pins){
        for (var i = 0; i < n; i++) {
            s.roll(pins);
        }
    };
    
    var roll_strike = function(){
        s.roll(10);
    };
    
    var roll_spare = function(){
        s.roll(5);
        s.roll(5);
    };
    
    beforeEach(function(){
        s = new Scorer(); 
    });
    
    it("test gutter game", function(){
        roll_many(20,0);
        console.log("Gutter game totalScore: ", s.totalScore);
        expect(s.totalScore).toEqual(0);
    });
    
    it("test all ones", function(){
        roll_many(20,1);
        console.log("All ones totalScore: ", s.totalScore);
        expect(s.totalScore).toEqual(20);
    });
    
    it("test one spare", function(){
        roll_spare();
        s.roll(3);
        roll_many(17,0);
        console.log("One spare totalScore: ", s.totalScore);
        expect(s.totalScore).toEqual(16);
    });
    
    it("test one strike", function(){
        roll_strike();
        s.roll(3);
        s.roll(4);
        roll_many(16,0);
        console.log("One strike totalScore: ", s.totalScore);
        expect(s.totalScore).toEqual(24);
    });
    
    it("test perfect game", function(){
        roll_many(12,10);
        console.log("Perfect game totalScore: ", s.totalScore);
        expect(s.totalScore).toEqual(300);
    });
});