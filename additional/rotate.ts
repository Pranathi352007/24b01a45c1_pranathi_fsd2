function rotateArray(arr: number[], k: number): number[] {
    let n = arr.length;
    let result = new Array(n);

    for (let i = 0; i < n; i++) {
        result[i] = arr[(i + k) % n];
    }

    return result;
}

console.log(rotateArray([1,2,3,4,5],2));