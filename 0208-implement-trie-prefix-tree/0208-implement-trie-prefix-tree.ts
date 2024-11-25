class Trie {
    private wordSet: Set<string>

    constructor() {
        this.wordSet = new Set<string>()
    }

    insert(word: string): void {
        this.wordSet.add(word)
    }

    search(word: string): boolean {
        return this.wordSet.has(word)
    }

    startsWith(prefix: string): boolean {
        return !!Array.from(this.wordSet).find(word => word.startsWith(prefix))
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */