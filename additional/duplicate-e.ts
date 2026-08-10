function findDuplicates(arr: number[]): number[] {
    let seen = new Set<number>();
    let duplicates = new Set<number>();

    for (let num of arr) {
        if (seen.has(num))
            duplicates.add(num);
        else
            seen.add(num);
    }

    return [...duplicates];
}

console.log(findDuplicates([1,2,3,2,4,5,3,6]));