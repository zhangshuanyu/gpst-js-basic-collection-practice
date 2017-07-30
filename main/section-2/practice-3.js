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
                             if(collection[i].length==1){
                                        idx = collection.indexOf(collection[i]);
                                        while (idx != -1) {
                                                  indices.push(idx);
                                                  idx = collection.indexOf(collection[i], idx + 1);
                                        }                              
                                        k.push(collection[i]);
                                        cnt.push(indices.length);
                              }else{
                                        if(k.includes(collection[i][0])){//             /[1-9]\d*/             /\d{1,2}/
                                              cnt[k.indexOf(collection[i][0])] += parseInt(collection[i].match(/[1-9]\d*/));
                                        }else{
                                                  k.push(collection[i][0]);
                                                  cnt.push(parseInt(collection[i].match(/\d/)));
                                        }                                       
                              }
                              
                   }
                   indices = [];
          }
          for(var l=0;l<k.length;l++)
          {
                    con.push({name:k[l],summary:cnt[l]});
          }

  return  con; //  '实现练习要求，并改写该行代码。';
}
