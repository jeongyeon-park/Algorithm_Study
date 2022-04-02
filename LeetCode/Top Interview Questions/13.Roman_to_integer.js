/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let hashmap = new Map([['I',1],['V',5],['X',10],['L',50],['C',100],['D',500],['M',1000]]);
    let hashmap2 = new Map([['IV',4],['IX',9],['XL',40],['XC',90],['CD',400],['CM',900]]);
    let checkHashmap2 = ['IV', 'IX', 'XL', 'XC', 'CD', 'CM'];

    let sum =0;
    for(let i=0; i<s.length; i++){
        
        if ((s[i] == 'I' || s[i]=='X' || s[i]=='C') && i+1<=s.length ){
            mid = s[i] + s[++i];
            
            if( checkHashmap2.includes(mid)){
                mid_sum= hashmap2.get(mid);
                sum+=mid_sum;
            }
            else{
                i-=1;
                sum+=hashmap.get(s[i]);
            }
            
        }
        else{
            sum+=hashmap.get(s[i]);
        }
    }
    console.log(sum);
    return(sum);
};

romanToInt("MMMXLV");