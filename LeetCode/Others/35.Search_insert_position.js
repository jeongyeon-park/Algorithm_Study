/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    let index = Math.round(nums.length/2);

    if (nums[index] <= target) {
        for( ; index < nums.length ; index++){
            if (nums[index] === target) return index;
            if(nums[index] > target  ) return index;
        }
        return index;
    }

    else {
        for ( ; index>=0 ; index--){
            if (nums[index] === target) return index;
            if(nums[index] < target) return index+1;
        }
        return index+1;
    }
};