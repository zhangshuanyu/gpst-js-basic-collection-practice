'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    let arr = collectionA.map(ele => ele.key).filter(key => objectB.value.includes(key));
    return arr;
};