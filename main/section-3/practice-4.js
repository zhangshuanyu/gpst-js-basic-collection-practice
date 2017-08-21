'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let collectionC = summarize(collectionA);
    return subcount(collectionC, objectB);
};

function subcount(collectionC, objectB) {
    collectionC.forEach(function (obj) {
        let judge = objectB.value.includes(obj.key);
        if (judge) {
            obj.count -= parseInt(obj.count / 3);
        }
    });
    return collectionC;
};

function summarize(collectionA) {
    let result = [];
    collectionA.forEach(function (item) {
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