let assert = require("assert");
let lib = require("./lib.js");
let {map,filter,reduce} = lib;

describe('map',function(){
  it('should work for numbers',function(){
    assert.deepEqual(map(x=>x+2,[1,2,3]),[3,4,5]);
  })
  it('should work for empty array',function(){
    assert.deepEqual(map(x=>x+2,[]),[]);
  })
  it('should work for strings',function(){
    assert.deepEqual(map(x=>x,["nam","an"]),["nam","an"]);
    assert.deepEqual(map(x=>x.length,["nam","an"]),[3,2]);
  })
})
