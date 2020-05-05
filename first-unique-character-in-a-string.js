/*  
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:
s = "leetcode"
return 0.

s = "loveleetcode",
return 2.

Note: You may assume the string contain only lowercase letters.
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {

    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], { index: i, count: map.get(s[i]).count + 1 });
        } else {
            map.set(s[i], { index: i, count: 1 });
        }
    }

    // console.log(map)
    let entries = map.entries();

    while (true) {
        let res = entries.next().value
        if (res) {
            const [key, obj] = res
            if (obj.count === 1)
                return obj.index
        } else {
            break;
        }
    }
    return -1;
};

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar2 = function (s) {
    let charMap = {};

    for (let i = 0; i < s.length; i++) {
        if (charMap[s[i].charCodeAt(0)]) {
            charMap[s[i].charCodeAt(0)]++;
        } else {
            charMap[s[i].charCodeAt(0)] = 1;
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (charMap[s[i].charCodeAt(0)] == 1) return i;
    }

    return -1;
};


/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar3 = function (s) {
    for (let i = 0; i < s.length; i++) {
        if (s.lastIndexOf(s[i]) === s.indexOf(s[i])) {
            return i
        }

    }
    return -1
};


/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar4 = function (s) {
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s.slice(i, i + 1)) == s.lastIndexOf(s.slice(i, i + 1))) { return i };
    }
    return -1;
};

/**
* @param {string} s
* @return {number}
*/
var firstUniqChar5 = function (s) {
    const elements = s.split("");
    let index = null;
    for (let element of elements) {
        index = s.indexOf(element);
        if (index > -1) {
            if (s.indexOf(element, index + 1) === -1) {
                return index;
            } else {
                index = -1;
            }
        }
    }
    if (s.length === 0) {
        return -1;
    } else {
        return index;
    }
};