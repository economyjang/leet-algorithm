class Solution:
    def reorderLogFiles(self, logs: List[str]) -> List[str]:
        digit_logs = [log for log in logs if log.split()[1].isdigit()]
        letter_logs = [log for log in logs if not log.split()[1].isdigit()]
        letter_logs.sort(key=lambda x: (x.split()[1:], x.split()[0]))

        return letter_logs + digit_logs
        