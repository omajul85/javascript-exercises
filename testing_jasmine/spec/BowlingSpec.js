describe("Bowling", function(){
    var g;
    
    var roll_many = function(n, pins){
        for (var i = 0; i < n; i++) {
            g.roll(pins);
        }  
    };
    
    var roll_strike = function(){
        g.roll(10);
    };
    
    var roll_spare = function(){
        g.roll(5);
        g.roll(5);
    };
    
    beforeEach(function(){
        g = new Game(); 
    });
    
    it("test gutter game", function(){
        roll_many(20,0);
        expect(g.score()).toEqual(0);
    });
    
    it("test all ones", function(){
        roll_many(20,1);
        expect(g.score()).toEqual(20);
    });
    
    it("test one spare", function(){
        roll_spare();
        g.roll(3);
        roll_many(17,0);
        expect(g.score()).toEqual(16);
    });
    
    it("test one strike", function(){
        roll_strike();
        g.roll(3);
        g.roll(4);
        roll_many(16,0);
        expect(g.score()).toEqual(24);
    });
    
    it("test perfect game", function(){
        roll_many(12,10);
        expect(g.score()).toEqual(300);
    });
});