let assert = require("assert");
let lib = require("./lib.js");
let {map,filter,reduce} = lib;

const isEven = function(number){
  return(number%2==0);
}
const sum = function(a,b){
  return a+b;
}

const product = function(a,b){
  return a*b;
}

const isOdd = function(a){
  return (a%2==1);
}

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

describe('filter',function(){
  it('should work for empty array',function(){
    assert.deepEqual(filter(isEven,[]),[]);
  })
  it('should work for numbers',function(){
    assert.deepEqual(filter(isEven,[1,2,3,4]),[2,4]);
    assert.deepEqual(filter(isOdd,[1,2,3,4]),[1,3]);
  })
})
