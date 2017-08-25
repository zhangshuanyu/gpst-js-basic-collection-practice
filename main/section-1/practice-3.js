'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    var arr = collectionA.filter(element => objectB.value.includes(element));
    return arr;
};