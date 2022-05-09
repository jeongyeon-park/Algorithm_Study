/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let start=0; 
    let end= s.length-1;
    let endNumber = s.length/2;
    let recursive = (a,b)=>{
        if (a<=endNumber && b>=endNumber){
            console.log('s: ',a,' e:',b);
            let character = s[a];
            s[a]=s[b];
            s[b]=character;
            recursive(a+1,b-1);
        }
    }
    recursive(start,end);
};