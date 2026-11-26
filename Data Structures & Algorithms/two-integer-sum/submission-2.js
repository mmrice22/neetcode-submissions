class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const prevMap = new Map();
        let result = [];

        nums.forEach((num, i) => {
            if (result.length > 0) return;
            const diff = target - num;

            if (prevMap.has(diff)) {
                result = [prevMap.get(diff), i];
                return;
            }

            prevMap.set(num, i);
        });

        return result;
    }
}