/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle == " " || needle == "") return 0;

    let s;
    let e;

    for (s = 0; s < haystack.length; s++) {
        console.log(haystack[s]);
        if (haystack[s] == needle[0]) {
            e = s;
            let word = haystack[s];
            while (word.length <= needle.length) {
                if (word == needle) return s;
                e++;
                word += haystack[e];
            }
        }
    }
    return -1;
};