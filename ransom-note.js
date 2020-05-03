/*
Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Note:
You may assume that both strings contain only lowercase letters.  
*/

/*  
canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {

    const magazineArr = magazine.split("");
    for (let i = 0; i < ransomNote.length; i++) {
        let index = magazineArr.indexOf(ransomNote[i]);
        if (index < 0) {
            return false;
        }
        magazineArr.splice(index, 1);
    }

    return true;
};