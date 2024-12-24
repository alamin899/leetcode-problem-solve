
var increasingTriplet = function(nums) {
    let first=Infinity;
    let second = Infinity;
    for(var i=0;i<nums.length;i++){
        if(first>=nums[i]){
            first = nums[i];
        }
        if(first<nums[i] && second>nums[i]){
            second = nums[i]
        }

        if(second<nums[i]){
            return true
        }
    }
    return false
};

console.log(increasingTriplet([1,2,3,4,5])) // true