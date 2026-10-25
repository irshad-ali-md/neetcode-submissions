class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let obj = {};

        for (let o of nums) {
            obj[o] = (obj[o] || 0) + 1;

            if (obj[o] > 1) return true;
        }

        return false;
    }
}
