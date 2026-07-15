class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        let sObj = {};
        for (let char of s) {
            sObj[char] = (sObj[char] || 0) + 1;
        }

        let tObj = {};
        for (let char of t) {
            tObj[char] = (tObj[char] || 0) + 1;
        }

        return Object.keys(sObj).every(o => {
            return sObj[o] === tObj[o];
        })
    }
}
