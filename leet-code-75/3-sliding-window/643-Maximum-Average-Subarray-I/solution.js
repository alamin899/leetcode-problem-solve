/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    var maxSum=0;
    var itemMove =0;
    var amount=0
    for(var i=0;i<nums.length;i++){
        if(k==1){
            if((i==0) && (nums[i]<0)){
                maxSum=nums[i]
            }else{
                maxSum =Math.max(nums[i],maxSum)
            }
            
            continue;
        }
        
        if(i>=k && k>1){
            maxSum = Math.max(((maxSum-nums[itemMove])+nums[i]),maxSum)
            itemMove++;
        }
        
        else{
            maxSum +=nums[i]
        }
    }
    return maxSum/k;
};
console.log(findMaxAverage([-1],1));