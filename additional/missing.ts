function missingNumber(arr: number[]): number {
    let n = arr.length + 1;

    let expected = (n * (n + 1)) / 2;

    let actual = arr.reduce((sum, val) => sum + val, 0);

    return expected - actual;
}

console.log(missingNumber([1, 2, 3, 5]));