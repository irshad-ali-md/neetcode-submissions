class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = {}; //{7: 2}
        let freq = Array.from({ length: nums.length + 1 }, () => []);

        for (let num of nums) {
            count[num] = (count[num] || 0) + 1;
        }

        for (let c in count) {
            freq[count[c]].push(parseInt(c));
        }

        const res = [];
        for (let i=freq.length - 1;i>0;i--) {
            for (const n of freq[i]) {
                res.push(n);
                if (res.length === k) return res;
            }
        }
    }
}
