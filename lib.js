//function to replicate map()
const map = function(mapper,list){
  let processedList = [];
  for(item of list){
    processedList.push(mapper(item));
    }
  return processedList;
}

//function to replicate filter()
const filter = function(predicate,list){
  let processedList = [];
  for(item of list){
    if(predicate(item))
      processedList.push(item);
  }
  return processedList;  
}

//function to replicate forEach()
const forEach = function(callback,list){
  for (item of list)
    callback(item);
}

//function to replicate reduce()
const reduce = function(reducer,list,initialiser){
  if(!list.length && !initialiser)
    return undefined;
  if(!initialiser){
    initialiser = +list[0];
    list.shift();
  }
  for(item of list){
    let result = reducer(initialiser,item);
    initialiser = result;
  }
  return initialiser;
}

const every = function(predicate,list){
  for(item of list){
    if(!predicate(item))
      return false;
  }
  return true;
}

const some = function(predicate,list){
  for (item of list){
    if(predicate(item))
      return true;
  }
  return false;
}

const mapReducerGenerator = function(mapper){
  return function(initialiser,element){
    initialiser.push(mapper(element));
    return initialiser;  
  }
}

const mapPrime = function(mapper,list){
  let reducer = mapReducerGenerator(mapper);
  result = reduce(reducer,list,[]);
  return result;
}

const filterReducerGenerator = function(predicate){
  return function(initialiser,element){

    if(predicate(element))
      initialiser.push(element);

    return initialiser;
  }
}

const filterPrime = function(predicate,list){
  let reducer = filterReducerGenerator(predicate);
  result = reduce(reducer,list,[]);
  return result;
}

const recursiveMap = function(mapper,list,result = []){
console.log(list);

  if(list.length == 0)
    return result;

  result.push(mapper(list[0]));
  listCopy = list.slice(1);
    
  return recursiveMap(mapper,listCopy,result);
}

module.exports = {map,filter,reduce,
  every,some,mapPrime,
  filterPrime,recursiveMap};

