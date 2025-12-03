class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagram_dict = collections.defaultdict(list)

        for word in strs:
            anagram = ''.join(sorted(word))
            anagram_dict[anagram].append(word)

        return list(anagram_dict.values())