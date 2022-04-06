/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let A = [s[s.length-1]];
    
    for (let i =s.length-2; i>=0; i--){
        if(A.length==0){
            A.push(s[i]);
        }
        else{
            if(A[A.length-1].charCodeAt() - s[i].charCodeAt() == 2 || A[A.length-1].charCodeAt() - s[i].charCodeAt() == 1) {
                A.pop();
            } 
            else{
                A.push(s[i]);
            }
        }
    }
    if(A.length==0) return true;
    else {
        return false;
    }
};