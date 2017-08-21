'use strict';
module.exports = function countSameElements(collection) {
    let result = [];
    collection.forEach(function (item) {
        let count = 1;
        if (item.length > 1) {
            count = parseInt(item.match(/[1-9]\d*/));
            item = item[0];
        }
        let obj = result.find(obj => obj.name === item);
        if (obj) {
            obj.summary += count;
        } else {
            result.push({name: item, summary: count});
        }
    })
    return result;
}
