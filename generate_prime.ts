function generatePrimes(start: number, end: number): number[] {
    let primes: number[] = [];

    for (let i = start; i <= end; i++) {
        let prime = true;

        if (i <= 1) continue;

        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                prime = false;
                break;
            }
        }

        if (prime) primes.push(i);
    }

    return primes;
}

console.log(generatePrimes(10, 30));