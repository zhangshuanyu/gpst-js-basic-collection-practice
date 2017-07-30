'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  var con =[];
          for(var i=0; i<collectionA.length; i++)
          {
                    for(var j=0; j<collectionB.length; j++)
                    {
                              if(collectionA[i]==collectionB[j])
                              {
                                    con.push(collectionA[i]);
                              }
                    }
          }
  return con;//'实现练习要求，并改写该行代码。
}
