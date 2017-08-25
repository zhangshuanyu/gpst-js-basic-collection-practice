'use strict';
module.exports = function countSameElements(collection) {
    var result = [];
    collection.forEach(function (item) {
        var count = 1;
        if(item.includes('-')) {
            var split = item.split('-');
            item = split[0];
            count = Number(split[1]);
        }
        var obj = result.find(obj => obj.key === item);
        if (obj) {
            obj.count++;
        } else {
            result.push({key: item, count: count});
        }
    });
    return result;
};
