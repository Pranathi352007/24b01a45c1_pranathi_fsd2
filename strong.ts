function factorial(n: number): number {
    let fact = 1;

    for (let i = 2; i <= n; i++)
        fact *= i;

    return fact;
}

function isStrong(num: number): boolean {
    let temp = num;
    let sum = 0;

    while (temp > 0) {
        let digit = temp % 10;
        sum += factorial(digit);
        temp = Math.floor(temp / 10);
    }

    return sum === num;
}

console.log(isStrong(145));