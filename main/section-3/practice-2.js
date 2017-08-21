'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    collectionA.forEach(function (obj) {
        let judge = objectB.value.includes(obj.key);
        if(judge){
            obj.count -= parseInt(obj.count/3);
        }
    });
    return collectionA;
};