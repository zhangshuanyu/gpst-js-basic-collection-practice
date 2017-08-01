'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
          var result = [];
          for(let item of collectionA){
                    if(includes(objectB.value,item)){
                              result.push(item);
                    }
          }
          return result;
}
function includes(collection,ch){
          for(let item of collection){
                    if(item === ch){
                              return true;
                    }
          }
          return false;
}