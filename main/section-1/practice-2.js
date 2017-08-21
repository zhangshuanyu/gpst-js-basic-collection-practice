'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    let arr = collectionA.filter(ele => collectionB[0].includes(ele));
    return arr;
}