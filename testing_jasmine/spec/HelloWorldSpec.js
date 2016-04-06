describe("Hello World", function(){
    var x = 3;
    var y = 5;
    // Equal matcher
    it("says hello", function(){
        expect(helloWorld()).toEqual("Hello World!");    
    }); 
    
    // Test if the string contains the word
    it("says hello", function(){
        expect(helloWorld()).toContain("World!");    
    });
    
    it("test inequality", function(){
        expect(x).not.toEqual(y);        
    });
});