class RandomizedSet {
    private randomizedSet;
    
    constructor() {
        this.randomizedSet = new Set();
    }

    insert(val: number): boolean {
        if(!this.randomizedSet.has(val)) {
            this.randomizedSet.add(val);
            return true;
        } else {
            return false;
        }
    }

    remove(val: number): boolean {
        if(this.randomizedSet.has(val)) {
            this.randomizedSet.delete(val);
            return true;
        } else {
            return false;
        }
    }

    getRandom(): number {
        const randomIndex = Math.floor(Math.random() * this.randomizedSet.size);
        return +Array.from(this.randomizedSet)[randomIndex];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */