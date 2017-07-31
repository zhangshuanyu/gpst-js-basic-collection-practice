'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  //统计出A集合中相同的元素的个数，形成C集合
          var collectionC =[];
          var indices = [];
          var idx = -1;
          var k=[];
          var cnt=[];
          for(var i=0; i<collectionA.length; i++)
          {
                   if(k.includes(collectionA[i])){
                              continue;
                   }else{
                             if(collectionA[i].length==1){
                                        idx = collectionA.indexOf(collectionA[i]);
                                        while (idx != -1) {
                                                  indices.push(idx);
                                                  idx = collectionA.indexOf(collectionA[i], idx + 1);
                                        }                              
                                        k.push(collectionA[i]);
                                        cnt.push(indices.length);
                              }else{
                                        if(k.includes(collectionA[i][0])){//             /[1-9]\d*/             /\d{1,2}/
                                              cnt[k.indexOf(collectionA[i][0])] += parseInt(collectionA[i].match(/[1-9]\d*/));
                                        }else{
                                                  k.push(collectionA[i][0]);
                                                  cnt.push(parseInt(collectionA[i].match(/\d/)));
                                        }                                       
                              }
                              
                   }
                   indices = [];
          }
          //C集合中的元素要形如{key:"a", count: 3}
          for(var l=0;l<k.length;l++)
          {
                    collectionC.push({key:k[l],count:cnt[l]});
          }
          
          //选出C集合中的元素的key属性跟B对象中value属性中的元素相同的元素,把他们的count满3减1，输出减后的新C
          for(var i=0; i<collectionC.length; i++)
          {
                    if( objectB.value.includes(collectionC[i].key))
                    {
                            
                            collectionC[i].count-= Math.floor(collectionC[i].count/3);
                    }
          }
          
  return collectionC;         //'实现练习要求，并改写该行代码。';
}
