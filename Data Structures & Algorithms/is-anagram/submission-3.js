class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        let obj1 = {};
        let obj2 = {};

        for (let i of s) {
            obj1[i] = (obj1[i] || 0) + 1;
        }

        for (let j of t) {
            obj2[j] = (obj2[j] || 0) + 1;
        }

        return Object.keys(obj1).every(o => obj1[o] == obj2[o]);
    }
}
