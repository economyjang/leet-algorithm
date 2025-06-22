class Solution {
    public int characterReplacement(String s, int k) {
        int maxLength = 0;

        Map<Character, Integer> charMap = new HashMap<>();
        int left = 0;

        for (int right = 0; right < s.length(); right++) {
            char c = s.charAt(right);
            charMap.put(c, charMap.getOrDefault(c, 0) + 1);

            int maxCharCount = Collections.max(charMap.values());
            int windowSize = right - left + 1;
            int otherCharCount = windowSize - maxCharCount;

            if (otherCharCount > k) {
                char leftChar = s.charAt(left);
                charMap.put(leftChar, charMap.get(leftChar) - 1);
                left++;
            }

            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
    }
}