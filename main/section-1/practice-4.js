'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    var arr = collectionA.map(element => element.key).filter(key => objectB.value.includes(key));
    return arr;
};