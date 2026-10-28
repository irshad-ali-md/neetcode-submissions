class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numSet = new Set(nums);
        let longest = 0;

        for (let n of numSet) {
            if (numSet.has(n - 1)) continue;

            let length = 0;
            let seq = n;
            while(numSet.has(seq)) {
                length++;
                seq++;
            };

            longest = Math.max(longest, length);
        }

        return longest;
    }
}
