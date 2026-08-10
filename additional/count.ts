function countOccurrences(arr: number[]): void {
    let map = new Map<number, number>();

    for (let num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    console.log(map);
}

countOccurrences([1,2,2,3,4,4,4]);