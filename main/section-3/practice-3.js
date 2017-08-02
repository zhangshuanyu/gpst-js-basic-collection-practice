'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
          let collectionC = summarize(collectionA);
          return subcount(collectionC,objectB);
 }
 
function subcount(collectionC,objectB){
          let result = [];
          
          for(let item of collectionC){
                    let key = item.key;
                    let count = item.count;
                    if(compare(objectB.value , item.key)){
                              count -= parseInt(count/3);
                    }
                    result.push({key: key , count: count});
          }
          return result;
}
function compare(array , ch){
          for(let item of array){
                    if(item === ch){
                              return true;
                    }
          }
          return false;
}

function summarize(collectionA){
          let result = [];
          
          for(let item of collectionA){
                    let obj = finds(result,item);
                    if(obj){
                              obj.count++;
                    }else{
                              result.push({key: item, count: 1});
                    }
          }
          
          return result;
}
function finds(collection,ch){
          for(let item of collection){
                    if(item.key === ch){
                              return item;
                    }
          }
          
          return null;
}          