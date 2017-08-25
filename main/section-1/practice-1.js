'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    var arr = collectionA.filter(element => collectionB.includes(element));
    return arr;
};
