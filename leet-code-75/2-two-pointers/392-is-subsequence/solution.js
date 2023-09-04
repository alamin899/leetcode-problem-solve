/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    var leftPointer = 0;
    for(var i=0;i<t.length;i++){
        if(t[i] == s[leftPointer]){
            leftPointer++;
        }
    }
    return s.length == leftPointer
};