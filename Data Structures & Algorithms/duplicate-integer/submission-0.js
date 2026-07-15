class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let obj = {};

        for(let i=0;i<nums.length;i++) {
            obj[nums[i]] = (obj[nums[i]] || 0) + 1;
        }

        const result = Object.keys(obj).some(o => obj[o] > 1);

        return result;
    }
}
