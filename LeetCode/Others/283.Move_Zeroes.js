var moveZeroes = function(nums) {
    if (nums.length <=1) return;
    let s=0;
    let e=0; 
    for( s=0; s<nums.length ; s++){
        e= s+1;
        if(nums[s] == 0 ){
            while(nums[e] == 0 ){
                e+=1;
            }
            if ((nums[e] >0 || nums[e]<0) && e<=nums.length-1){
                let n = nums[s];
                nums[s] = nums[e];
                nums[e] = n;
            }
        }
    }
};