'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {

          var result = [];
          for(let item of collectionA){
                    if(includes(collectionB,item)){
                              result.push(item);
                    }
          }
          return result;
}
function includes(collection,ch){
          for( let item of collection){
                    if(item === ch){
                              return true;
                    }
          }
          return false;
}
