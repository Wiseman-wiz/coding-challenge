/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (target, nums) {
    var numberToIndex = {};
    for (i = 0; i < nums.length; i++) {
        var complement = target - nums[i];
        if (complement in numberToIndex) {
            return [numberToIndex[complement], i];
        }
        numberToIndex[nums[i]] = i;
    }
    return numberToIndex;
};