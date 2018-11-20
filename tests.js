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

//------------------test for map()
{
  const testMap = function(mapper,list,expectedOutput){
    assert.deepEqual(map(mapper,list),expectedOutput);
  }
  testMap(x=>x+2,[1,2,3],[3,4,5]);
  testMap(x=>x.length,["naman","dheeraj"],[5,7]);
  testMap(x=>x,["naman","dheeraj"],["naman","dheeraj"])
}

//------------------test for filter()
{
  const testFilter = function(callback,list,expectedOutput){
    assert.deepEqual(filter(callback,list),expectedOutput);
  }
  testFilter(isEven,[1,2,3],[2]);
  testFilter(isEven,[],[]);
  testFilter(isEven,[1,2,3,4,5,6],[2,4,6]);
  testFilter(isOdd,[1,2,3,4,5,6],[1,3,5]);
}

//------------test for reduce()
{
  const testReduce = function(callback,list,expectedOutput,initialiser){
    assert.deepEqual(reduce(callback,list,initialiser),expectedOutput);
  }
  testReduce(sum,[1,2],3);
  testReduce(sum,[1,2],4,1);
  testReduce(sum,[],undefined);
  testReduce(sum,[],undefined,1);
  testReduce(product,[1,2],2);
  testReduce(product,[1,2],8,4);
}

console.log('All tests passed');
