function gcdOfStrings(str1: string, str2: string): string {
    if(str1 + str2 !== str2 + str1) return ''

    const max = Math.max(str1.length, str2.length)
    const min = Math.min(str1.length, str2.length)

    const gcdNum = gcd(max, min)
    return str1.slice(0, gcdNum)
};

function gcd(a: number, b: number): number {
    while(b != 0) {
        let temp = b
        b = a % b
        a = temp
    }

    return a
}