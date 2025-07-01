class Solution {
    public int characterReplacement(String s, int k) {
        int maxLength = 0;

        Map<Character, Integer> map = new HashMap<>();

        int left = 0, right = 0;

        while(right < s.length()) {
            char rightChar = s.charAt(right);
            map.put(rightChar, map.getOrDefault(rightChar, 0) + 1);

            int max = Collections.max(map.values());
            int windowSize = right - left + 1;
            int min = windowSize - max;

            while(min > k) {
                char leftChar = s.charAt(left);
                if(map.containsKey(leftChar)) {
                    map.put(leftChar, map.get(leftChar) - 1);
                    left++;

                    max = Collections.max(map.values());
                    windowSize = right - left + 1;
                    min = windowSize - max;
                }
            }

            maxLength = Math.max(maxLength, right - left + 1);
            right++;
        }

        return maxLength;
    }
}