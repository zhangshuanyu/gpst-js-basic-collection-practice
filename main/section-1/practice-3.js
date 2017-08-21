'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    let arr = collectionA.filter(ele => objectB.value.includes(ele));
    return arr;
}