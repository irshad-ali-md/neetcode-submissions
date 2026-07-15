class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let obj = {};

        for(let i=0;i<=nums.length;i++) {
            let num = nums[i];
            obj[num] = (obj[num] || 0) + 1;

            if (obj[num] > 1) return true;
        }

        return false;
    }
}
