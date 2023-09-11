var uniqueOccurrences = function(arr) {
    var num1Array =[];
    var num2Array = [];
    
    const num1Set = new Map();
    for(var i=0;i<arr.length;i++){
        num1Set.set(arr[i], (num1Set.get(arr[i]) || 0) + 1);
    }
    
     const occurrenceSet = new Set();

    for (const value of num1Set.values()) {
        if (occurrenceSet.has(value)) {
          return false;
        }
        occurrenceSet.add(value);
    }
 
    return true
};