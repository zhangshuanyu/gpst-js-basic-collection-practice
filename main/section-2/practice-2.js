'use strict';
function summerize(array){
         let result = [];
          for(let item of array){
                    let obj = finds(result,item);
                    if(obj){
                              obj.count++;
                    }else{
                              result.push({key: item, count: 1});
                    }
          }
          return result; 
}
function finds(array,ch){
          for(let item of array){
                    if(item.key === ch){
                              return item;
                    }
          }
          return null;
}
function split(ch){
          let array = ch.split("-");
          return {key:array[0], count:parseInt(array[1],10)};
}
function push(result,key,count){
          for(var i=0; i<count; i++){
                   result.push(key); 
          }
          
}

function expend(collection){
          let result = [];
          for(let item of collection){
                    if(item.length > 1){
                              let {key,count} = split(item);
                              push(result,key,count);
                    }else{
                              result.push(item);
                    }
                    
          }
          return result;
}


module.exports = function countSameElements(collection) {
          let array = expend(collection);
          return summerize(array);
}