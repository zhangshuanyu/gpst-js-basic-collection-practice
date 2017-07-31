'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
          
          for(var i=0; i<collectionA.length; i++)
          {
                    if( objectB.value.includes(collectionA[i].key))
                    {
                            collectionA[i].count-=1;
                    }
          }
  return collectionA;         //'实现练习要求，并改写该行代码。';
}
