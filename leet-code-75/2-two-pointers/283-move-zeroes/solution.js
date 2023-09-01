var moveZeroes = function(nums) {
    var nonZeros = [];
    var nonZerosIndex = 0;
    for(var i=0;i<nums.length;i++){
        if(nums[i] != 0){
            nonZeros[nonZerosIndex] = nums[i]
            nonZerosIndex++
        }
    }
    for(var j=0;j<nums.length;j++){
        if(nonZeros[j] != undefined){
            nums[j] = nonZeros[j]
        }
        else{
            nums[j] = 0
        }
    }
    return nums;
}