var gcdOfStrings = function(str1, str2) {
    var l1 = str1.length;
    var l2 = str2.length;
    var gcd = 1;
    for(var i=1;i<=l1 && i<=l2;i++){
        if(l1%i==0 && l2%i==0){
            gcd=i;
        }
    }
    
    if(gcd>1){
        if(str1.substring(0,gcd) != str2.substring(0,gcd)
) {
            return "";
        }else{
            return str1.substring(0,gcd);
        }
    }else{
        return "";
    }
};