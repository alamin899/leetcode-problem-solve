var mergeAlternately = function(word1, word2) {
    var wordArr1=word1.split("");
    var wordArr2=word2.split("");
    var lengthData = wordArr1.length>wordArr2.length?wordArr1.length:wordArr2.length;
    var fullString='';
  
    for(var i=0;i<lengthData;i++){
        if(wordArr1[i] == undefined){
            fullString +=wordArr2[i];
            continue;
        } if(wordArr2[i] == undefined){
            fullString +=wordArr1[i];
            continue;
        }
            fullString +=wordArr1[i];
            fullString +=wordArr2[i];
        
    }
    return fullString;
};