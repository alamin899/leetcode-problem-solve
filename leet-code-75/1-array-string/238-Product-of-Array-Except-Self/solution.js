var productExceptSelf = function(nums) {
    let prefix_sum =[];
    let suffix_sum =[];
    for(var i=0;i<nums.length;i++){
        prefix_sum[i] = nums[i]*(i==0?1:prefix_sum[i-1]);
    }

    for(var i=(nums.length-1);i>=0;i--){
        suffix_sum[i] = nums[i]*(i==nums.length-1?1:suffix_sum[i+1]);
    }

    let results =[];
    for(var i=(nums.length-1);i>=0;i--){
        if(i==nums.length-1){
            results[i] = prefix_sum[i-1]*1;
            continue;
        }
        if(i==0){
            results[i] = 1*suffix_sum[i+1];
            continue;
        }
        results[i] = prefix_sum[i-1]*suffix_sum[i+1];
    }
    return results;
};

console.log(productExceptSelf([1,2,3,4]))