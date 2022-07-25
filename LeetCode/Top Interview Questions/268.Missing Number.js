/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    n = nums.length;
    arr = [];
    for (let i = 0; i <= n; i++) {
        arr.push(i);
    }
    return arr.filter((e) => !nums.includes(e));
};