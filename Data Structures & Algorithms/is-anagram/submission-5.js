class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        let map1 = {};
        let map2 = {};

        for (let a of s) {
            map1[a] = (map1[a] || 0) + 1;
        }
        for (let b of t) {
            map2[b] = (map2[b] || 0) + 1;
        }

        return Object.keys(map1).every(char => {
            return map1[char] === map2[char];
        })
    }
}
