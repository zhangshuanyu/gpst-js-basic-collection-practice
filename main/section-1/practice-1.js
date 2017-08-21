'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    let arr = collectionA.filter(ele => collectionB.includes(ele));
    return arr;
}
