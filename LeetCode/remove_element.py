class Solution(object):
    def removeElement(self, nums, val):
        """
        :type nums: List[int]
        :type val: int
        :rtype: int
        """
        nums[:] = [i for i in nums if i != val]
        return nums


solution_instance = Solution()
result = solution_instance.removeElement([2, 3, 3, 2], 3)

print(result)
