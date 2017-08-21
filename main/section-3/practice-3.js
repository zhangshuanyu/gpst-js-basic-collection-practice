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
        let obj = result.find(obj => obj.key === item);
        if (obj) {
            obj.count++;
        } else {
            result.push({key: item, count: 1});
        }
    });
    return result;
};