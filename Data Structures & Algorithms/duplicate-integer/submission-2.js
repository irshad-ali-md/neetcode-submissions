class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let obj = {};

        nums.forEach(o => {
            obj[o] = (obj[o] || 0) + 1;
        });

        let isDupliate = Object.values(obj).some(o => o > 1);

        return isDupliate;
    }
}
