/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let previous=0;
    var current = 0
    var maxGain = 0;
    for(var i=0;i<gain.length;i++){
        current =(gain[i]+previous)
        maxGain = Math.max(maxGain,current)
        previous += gain[i]
    }
    return (maxGain <0)?0:maxGain;
};