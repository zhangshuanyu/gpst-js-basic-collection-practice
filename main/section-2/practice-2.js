'use strict';
module.exports = function countSameElements(collection) {
    let result = [];
    collection.forEach(function (item) {
        let count = 1;
        if(item.includes('-')) {
            let split = item.split('-');
            item = split[0];
            count = Number(split[1]);
        }
        let obj = result.find(obj => obj.key === item);
        if (obj) {
            obj.count++;
        } else {
            result.push({key: item, count: count});
        }
    });
    return result;
};
