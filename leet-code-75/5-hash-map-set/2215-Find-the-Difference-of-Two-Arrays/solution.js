/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    var num1Array =[];
    var num2Array = [];
    
    const num1Set = new Map();
    for(var i=0;i<nums1.length;i++){
        num1Set.set(nums1[i], (num1Set.get(nums1[i]) || 0) + 1);
    }
    
    const num2Set = new Map();
    for(var j=0;j<nums2.length;j++){
        num2Set.set(nums2[j], (num2Set.get(nums2[j]) || 0) + 1);
    }
    
   for (const [num, _] of num1Set) {
       if(!num2Set.has(num)){
           num1Array.push(num)
       }
    }
    
    for (const [num, _] of num2Set) {
       if(!num1Set.has(num)){
           num2Array.push(num)
       }
    }
    return [num1Array,num2Array];
};