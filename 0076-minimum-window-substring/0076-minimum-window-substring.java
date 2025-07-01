class Solution {
    public String minWindow(String s, String t) {
        int minWindowSize = Integer.MAX_VALUE;
        int minStartIdx = 0;

        Map<Character, Integer> subStrMap = new HashMap<>();
        Map<Character, Integer> originStrMap = new HashMap<>();

        for(char ch : t.toCharArray()) {
            subStrMap.put(ch, subStrMap.getOrDefault(ch, 0) + 1);
        }

        int left = 0, right = 0, need = subStrMap.size(), have = 0;
        while(right < s.length()){
            char rightChar = s.charAt(right);
            originStrMap.put(rightChar, originStrMap.getOrDefault(rightChar, 0) + 1);

            if(subStrMap.containsKey(rightChar) &&
                    subStrMap.get(rightChar).intValue() == originStrMap.get(rightChar).intValue()) {
                have++;
            }

            while(need == have) {
                if(minWindowSize > right - left + 1) {
                    minWindowSize = right - left + 1;
                    minStartIdx = left;
                }

                char leftChar = s.charAt(left);
                originStrMap.put(leftChar, originStrMap.get(leftChar) - 1);

                if(subStrMap.containsKey(leftChar) &&
                        originStrMap.get(leftChar) < subStrMap.get(leftChar)) {
                    have--;
                }


                left++;
            }

            right++;
        }

        return minWindowSize == Integer.MAX_VALUE ? "" : s.substring(minStartIdx, minStartIdx + minWindowSize);
    }
}