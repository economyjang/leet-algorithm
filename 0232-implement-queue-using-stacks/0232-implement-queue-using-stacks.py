class MyQueue:
    def __init__(self):
        self.input = []
        self.output = []

    # 요소 x 를 큐 마지막에 삽입
    def push(self, x: int) -> None:
        self.input.append(x)

    # 큐 처음에 있는 요소를 제거
    def pop(self) -> int:
        self.peek()
        return self.output.pop()

    # 큐 처음에 있는 요소를 조회
    def peek(self) -> int:
        if not self.output:
            while self.input:
                self.output.append(self.input.pop())
        return self.output[-1]

    # 큐가 비어 있는지 여부를 리턴
    def empty(self) -> bool:
        return self.input == [] and self.output == []


# Your MyQueue object will be instantiated and called as such:
# obj = MyQueue()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.peek()
# param_4 = obj.empty()