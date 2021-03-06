let assert = require("assert");
let {map,filter,reduce,
  every,some,mapPrime,
  filterPrime,recursiveMap} = require("./lib.js");
 

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
    assert.deepEqual(map(x=>x,["nam","an"]),["nam","an"]);
    assert.deepEqual(map(x=>x.length,["nam","an"]),[3,2]);
    assert.deepEqual(map(x=>x+2,[1,2,3]),[3,4,5]);
  })
  it('should return empty array for empty array',function(){
    assert.deepEqual(map(x=>x+2,[]),[]);
  })
})

describe('filter',function(){
  it('should return empty array for empty array',function(){
    assert.deepEqual(filter(isEven,[]),[]);
  })
  it('should preserve data type',function(){
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
  it('should return undefined for empty array',function(){
    assert.deepEqual(reduce(sum,[]),undefined)
    assert.deepEqual(reduce(sum,[],4),4)
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

describe('mapPrime',function(){
  it('should work for numbers',function(){
    assert.deepEqual(mapPrime(x=>x+2,[1,2,3]),[3,4,5]);
  })
  it('should work for empty array',function(){
    assert.deepEqual(mapPrime(x=>x+2,[]),[]);
  })
  it('should work for strings',function(){
    assert.deepEqual(mapPrime(x=>x,["nam","an"]),["nam","an"]);
    assert.deepEqual(mapPrime(x=>x.length,["nam","an"]),[3,2]);
  })
})

describe('filterPrime',function(){
  it('should return empty array for empty array',function(){
    assert.deepEqual(filterPrime(isEven,[]),[]);
  })
  it('should preserve data type',function(){
    assert.deepEqual(filterPrime(isEven,[1,2,3,4]),[2,4]);
    assert.deepEqual(filterPrime(isOdd,[1,2,3,4]),[1,3]);
  })
})

describe('recursiveMap',function(){
  it('should preserve length and data type',function(){
    assert.deepEqual(recursiveMap(x=>x,["nam","an"]),["nam","an"]);
    assert.deepEqual(recursiveMap(x=>x.length,["nam","an"]),[3,2]);
    assert.deepEqual(recursiveMap(x=>x+2,[1,2,3]),[3,4,5]);
  })
  it('should return empty array for empty array',function(){
    assert.deepEqual(recursiveMap(x=>x+2,[]),[]);
  })
})

