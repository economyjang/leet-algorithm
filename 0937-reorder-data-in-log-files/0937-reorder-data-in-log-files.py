class Solution:
    def reorderLogFiles(self, logs: List[str]) -> List[str]:
        digit_logs, letter_logs = [], []

        for log in logs:
            if log.split()[1].isdigit():
                digit_logs.append(log)
            elif not log.split()[1].isdigit():
                letter_logs.append(log)
        
        letter_logs.sort(key=lambda x: (x.split()[1:], x.split()[0]))

        return letter_logs + digit_logs
        