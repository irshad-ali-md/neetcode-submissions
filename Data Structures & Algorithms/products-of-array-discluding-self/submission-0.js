class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let res = Array.from({ length: nums.length}, () => 1);

        let prefix = 1;
        for (let i=0;i < nums.length - 1;i++) {
            prefix *= nums[i];
            res[i+1] = prefix;
        }

        let postfix = 1;
        for (let i=nums.length - 1;i>0;i--) {
            postfix *= nums[i];
            res[i-1] *= postfix;
        }

        return res;
    }
}
