'use strict';
function summerize(array){
          let result = [];
          for(let item of array){
                    let obj = find(result,item);
                    if(obj){
                              obj.summary++;
                    }else{
                              result.push({name:item,summary:1});
                    }
          }
          return result;
}

function find(result,ch){
          for(let item of result){
                    if(item.name === ch){
                              return item;
                    }
          }
          return null;
}

function split(ch){
          if(ch.includes("-")){
                    let array = ch.split("-");
                    return {name:array[0],summary:parseInt(array[1],10)};
          }
          if(ch.includes(":")){
                    let array = ch.split(":");
                    return {name:array[0],summary:parseInt(array[1],10)};
          }
          if(ch.includes("[")){
                    let name = ch.charAt(0);
                    let summary = parseInt(ch.substr(2,ch.length-1));
                    return {name,summary};
          }
}

function push(result,name,summary){
          for(var i=0;i<summary; i++){
                    result.push(name);
          }
}

function expend(collection){
          let result = [];
          for(let item of collection){
                    if(item.length === 1){
                              result.push(item);
                    }else{
                              let {name,summary} = split(item);
                              push(result,name,summary);
                    }
          }
          return result;
}

module.exports = function countSameElements(collection) {
          let expendarray = expend(collection);
          return summerize(expendarray);
}
