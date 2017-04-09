'use strict';

var expect = require('chai').expect;
var echo = require('../index');


describe('#echo', function() {
    it('should return the passed argument', function() {
        var input = 'something';
        var result = echo(input);
        expect(result).to.equal(input); 
    }); 

    
    it('should return the passed argument', function() {
        var input = null;
        var result = echo(input);
        expect(result).to.equal(input); 
    });
});  
