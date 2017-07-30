'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
          var con =[];
          for(var i=0; i<collectionA.length; i++)
          {
                    for(var j=0; j<objectB.value.length; j++)
                    {
                              if(objectB.value[j].includes(collectionA[i].key))
                              {
                                    con.push(collectionA[i].key);
                              }
                    }
          }
  return con; // '实现练习要求，并改写该行代码。';
}
