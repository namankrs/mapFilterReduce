let assert = require("assert");
let lib = require("./lib.js");
let {map,filter,reduce,every,some,mapByReduce} = lib;

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
  it('should preserve length and data type',function(){
    assert.deepEqual(map(x=>x+2,[1,2,3]),[3,4,5]);
  })
  it('should return empty array for empty array',function(){
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

describe('reduce',function(){
  it('should work for numbers',function(){
    assert.deepEqual(reduce(sum,[1,2]),3)
    assert.deepEqual(reduce(sum,[1,2],4),7)
    assert.deepEqual(reduce(product,[1,2],),2)
    assert.deepEqual(reduce(product,[1,2],4),8)
  })
  it('should work for undefined',function(){
    assert.deepEqual(reduce(sum,[]),undefined)
    assert.deepEqual(reduce(sum,[],4),undefined)
  })
})
describe('every',function(){
  it('should work for numbers',function(){
    assert.deepEqual(every(isEven,[2,4,6]),true)
    assert.deepEqual(every(isEven,[1,2,3]),false)
  })
  it('should work for empty arrays',function(){
    assert.deepEqual(every(isEven,[]),true)
  })
})

describe('some',function(){
  it('should work for numbers',function(){
    assert.deepEqual(some(isEven,[1,2,3]),true)
  })
})

describe('mapByReduce',function(){
  it('should work for numbers',function(){
    assert.deepEqual(mapByReduce(x=>x+2,[1,2,3]),[3,4,5]);
  })
  it('should work for empty array',function(){
    assert.deepEqual(mapByReduce(x=>x+2,[]),[]);
  })
  it('should work for strings',function(){
    assert.deepEqual(mapByReduce(x=>x,["nam","an"]),["nam","an"]);
    assert.deepEqual(mapByReduce(x=>x.length,["nam","an"]),[3,2]);
  })
})

