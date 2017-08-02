'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
          let result = []; 
          
          for(let item of collectionA){
                   let key =  item.key;
                   let count = item.count;
                   
                   if(compare(objectB.value,key)){
                         count--;
                   }
                   result.push({key:key , count:count});                  
          }
          
          return result;
}
function compare(array,ch){
          
         for(let item of array) {
                   if(item === ch){
                             return true;
                   }
         }
         
         return false;
}
