class ListNode:
    def __init__(self, value = None):
        self.left = None
        self.right = None
        self.value = value

class MyCircularDeque:
    def __init__(self, k: int):
        self.head = self.tail = ListNode(None)
        self.max_length = k
        self.current_length = 0

    def insertFront(self, value: int) -> bool:
        if self.isFull():
            return False

        new = ListNode(value)

        if self.isEmpty():
            self.head = self.tail = new
        else:
            new.right = self.head
            self.head.left = new
            self.head = new

        self.current_length += 1

        return True

    def insertLast(self, value: int) -> bool:
        if self.isFull():
            return False

        new = ListNode(value)

        if self.isEmpty():
            self.head = self.tail = new
        else:
            new.left = self.tail
            self.tail.right = new
            self.tail = new

        self.current_length += 1

        return True

    def deleteFront(self) -> bool:
        if self.isEmpty():
            return False

        if self.current_length == 1:
            self.head = self.tail = ListNode(None)
        else:
            tmp = self.head
            self.head = self.head.right
            self.head.left = None
            tmp.right = None

        self.current_length -= 1
        return True

    def deleteLast(self) -> bool:
        if self.isEmpty():
            return False

        if self.current_length == 1:
            self.head = self.tail = ListNode(None)
        else:
            tmp = self.tail
            self.tail = self.tail.left
            self.tail.right = None
            tmp.left = None
            
        self.current_length -= 1
        return True

    def getFront(self) -> int:
        if self.isEmpty():
            return -1
        return self.head.value

    def getRear(self) -> int:
        if self.isEmpty():
            return -1
        return self.tail.value

    def isEmpty(self) -> bool:
        if self.head.value is None and self.tail.value is None:
            return True
        return False

    def isFull(self) -> bool:
        return self.current_length == self.max_length