/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const hashTable = new Map();

    for (let i of magazine) {
        hashTable.set(i, hashTable.get(i) ? hashTable.get(i) - 1 : -1);
    }

    for (let j of ransomNote) {
        if (!hashTable.get(j)) return false;
        else hashTable.set(j, hashTable.get(j) + 1);
    }
    return true;
};