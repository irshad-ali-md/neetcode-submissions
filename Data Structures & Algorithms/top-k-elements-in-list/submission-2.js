class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {};

        for (let num of nums) {
            map[num] = (map[num] || 0) + 1;
        }

        let freq = Array.from({ length: nums.length + 1 }, () => []);

        for (let key in map) {
            freq[map[key]].push(key);
        }

        const res = [];
        for(let i=freq.length - 1;i>0;i--) {
            for (const j of freq[i]) {
                res.push(j);

                if (res.length === k) return res;
            }
        }
    }
}
