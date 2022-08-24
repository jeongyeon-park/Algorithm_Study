/**
 * @param {number} n
 * @return {number}
 */

const saveArr = new Array();

var climbStairs = function (n) {

    for (let i = 0; i <= n; i++) {
        if (i === 0 || i === 1) saveArr[i] = 1;
        else {
            saveArr[i] = saveArr[i - 1] + saveArr[i - 2];
        }
    }
    return saveArr[n];
};