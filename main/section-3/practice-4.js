'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    var collectionC = summarize(collectionA);
    return subcount(collectionC, objectB);
};

function subcount(collectionC, objectB) {
    collectionC.forEach(function (obj) {
        var judge = objectB.value.includes(obj.key);
        if (judge) {
            obj.count -= parseInt(obj.count / 3);
        }
    });
    return collectionC;
};

function summarize(collectionA) {
    var result = [];
    collectionA.forEach(function (item) {
        var count = 1;
        if(item.includes('-')) {
            let split = item.split('-');
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