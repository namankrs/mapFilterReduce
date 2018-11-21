//function to replicate map()
const map = function(mapper,list){
  let processedList = [];
  for(item of list){
    processedList.push(mapper(item));
    }
  return processedList;
}

//function to replicate filter()
const filter = function(callback,list){
  let processedList = [];
  for(item of list){
    if(callback(item))
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
const reduce = function(callback,list,initialiser){
  if(!list.length)
    return undefined;
  if(!initialiser){
    initialiser = +list[0];
    list.shift();
  }
  for(item of list){
    let result = callback(initialiser,item);
    initialiser = result;
  }
  return initialiser;
}

const every = function(callback,list){
  for(item of list){
    if(!callback(item))
      return false;
  }
  return true;
}

const some = function(callback,list){
  for (item of list){
    if(callback(item))
      return true;
  }
  return false;
}
module.exports = {map,filter,reduce,every,some};

