class MyCircularQueue:
    def __init__(self, k: int):
        self.front = 0
        self.rear = 0
        self.length = k
        self.q = [None] * self.length

    def enQueue(self, value: int) -> bool:
        if self.q[self.rear] is None:
            self.q[self.rear] = value
            self.rear = (self.rear + 1) % self.length
            return True
        else:
            return False

    def deQueue(self) -> bool:
        if self.q[self.front] is None:
            return False
        else:
            self.q[self.front] = None
            self.front = (self.front + 1) % self.length
            return True

    def Front(self) -> int:
        if self.q[self.front] is None:
            return -1
        else:
            return self.q[self.front]

    def Rear(self) -> int:
        if self.q[self.rear - 1] is None:
            return -1
        else:
            return self.q[self.rear - 1]

    def isEmpty(self) -> bool:
        return self.front == self.rear and self.q[self.front] is None

    def isFull(self) -> bool:
        return self.front == self.rear and self.q[self.rear] is not None