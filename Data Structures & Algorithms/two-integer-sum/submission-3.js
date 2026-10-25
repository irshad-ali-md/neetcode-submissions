class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let obj = {};

        nums.forEach((num, i) => obj[num] = i);

        for(let i=0;i<nums.length;i++) {
            let diff = target - nums[i];
            
            if(obj[diff] !== undefined && obj[diff] !== i) return [i, obj[diff]];
        };
    }
}
