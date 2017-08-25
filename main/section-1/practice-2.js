'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    var arr = collectionA.filter(element => collectionB[0].includes(element));
    return arr;
};
