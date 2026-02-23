class Solution:
    def trap(self, height: List[int]) -> int:
        stack = []
        volume = 0

        for i in range(len(height)):
            while stack and height[stack[-1]] < height[i]:
                bottom = stack.pop()

                if not len(stack):
                    break

                left_wall = stack[-1]
                right_wall = i

                width = right_wall - left_wall - 1
                water_level = min(height[right_wall], height[left_wall]) - height[bottom]

                volume += width * water_level
            
            stack.append(i)
    
        return volume