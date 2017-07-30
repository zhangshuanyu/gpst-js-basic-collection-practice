'use strict';

module.exports = function countSameElements(collection) {
          var con =[];
          var indices = [];
          var idx = -1;
          var k=[];
          var cnt=[];
          for(var i=0; i<collection.length; i++)
          {
                   if(k.includes(collection[i])){
                              continue;
                   }else{
                              k.push(collection[i]);
                              idx = collection.indexOf(collection[i]);
                              while (idx != -1) {
                                        indices.push(idx);
                                        idx = collection.indexOf(collection[i], idx + 1);
                              }
                              cnt.push(indices.length);
                   }
                   indices = [];
          }
          for(var l=0;l<k.length;l++)
          {
                    con.push({key:k[l],count:cnt[l]});
          }

  return  con; //  '实现练习要求，并改写该行代码。';
}
