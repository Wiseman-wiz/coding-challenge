var a = [9, [2, 7, 11, 15]];
var b = [6, [3, 2, 4]];
var c = [6, [3, 3]];

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

console.log(twoSum(a[0], a[1]));
console.log(twoSum(b[0], b[1]));
console.log(twoSum(c[0], c[1]));
