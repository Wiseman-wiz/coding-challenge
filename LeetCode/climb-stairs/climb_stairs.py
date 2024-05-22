class Solution(object):
    def climbStairs(self, n):
        """
        :type n: int
        :rtype: int
        """
        a, b = 1, 1
        for i in range(n):
            a, b = b, a + b
        return a


n = 4
solution_instance = Solution()
result = solution_instance.climbStairs(n)
print(result)
