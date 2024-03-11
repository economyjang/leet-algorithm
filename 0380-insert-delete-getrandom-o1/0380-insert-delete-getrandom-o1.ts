class RandomizedSet {
    private randomizedMap;
    private list;
    
    constructor() {
        this.randomizedMap = new Map();
        this.list = [];
    }
    
    search(val: number): boolean {
        return this.randomizedMap.has(val);
    }

    insert(val: number): boolean {
        if(this.search(val)) return false;
        
        this.list.push(val);
        this.randomizedMap.set(val, this.list.length - 1);
        return true;
    }

    remove(val: number): boolean {
        if(!this.search(val)) return false;
        
        const idx = this.randomizedMap.get(val);
        this.list[idx] = this.list[this.list.length - 1];
        this.list.pop();
        this.randomizedMap.set(this.list[idx], idx);
        this.randomizedMap.delete(val);
            
        return true;
    }

    getRandom(): number {
        const randomIndex = Math.floor(Math.random() * this.list.length);
        return this.list[randomIndex];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */