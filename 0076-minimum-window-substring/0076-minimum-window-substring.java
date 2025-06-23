class Solution {
    public String minWindow(String s, String t) {
        int minWindow = Integer.MAX_VALUE;
        int minStart = 0;

        Map<Character, Integer> windowCharMap = new HashMap<>();
        Map<Character, Integer> tCharMap = new HashMap<>();
        for(char ch : t.toCharArray()) {
            tCharMap.put(ch, tCharMap.getOrDefault(ch, 0) + 1);
        }

        int left = 0, need = tCharMap.size(), have = 0;
        for(int right = 0; right < s.length(); right++) {
            char rightCh =  s.charAt(right);
            windowCharMap.put(rightCh, windowCharMap.getOrDefault(rightCh, 0) + 1);

            if(tCharMap.containsKey(s.charAt(right)) && tCharMap.get(s.charAt(right)).intValue() == windowCharMap.get(s.charAt(right)).intValue()) {
                have++;
            }

            while(have == need) {
                if(minWindow > right - left + 1) {
                    minWindow = right - left + 1;
                    minStart = left;
                }

                char leftCh =  s.charAt(left);
                windowCharMap.put(leftCh, windowCharMap.get(leftCh) - 1);

                if (tCharMap.containsKey(leftCh) && windowCharMap.get(leftCh).intValue() < tCharMap.get(leftCh).intValue()) {
                    have--;
                }

                left++;
            }
        }

        return minWindow == Integer.MAX_VALUE ? "" : s.substring(minStart, minStart + minWindow);
    }
}