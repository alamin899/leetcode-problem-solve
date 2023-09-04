var maxVowels = function(s, k) {
    const vowels = new Map();
        vowels.set('a', 1);
        vowels.set('e', 1);
        vowels.set('i', 1);
        vowels.set('o', 1);
        vowels.set('u', 1);
        
    var data = s.split("");
    var maxVowel = 0;
    var newVowelAmount=0;
    for(var i=0;i<data.length;i++){
        if(i>=k){
             if(vowels.has(data[i-k])){
                newVowelAmount--
            }
             if(vowels.has(data[i])){
                newVowelAmount++
            }
            maxVowel =Math.max(maxVowel,newVowelAmount)
        }else{
            if(vowels.has(data[i])){
                maxVowel++
                newVowelAmount++
            }
        }
    }
    return maxVowel
};