function isArmstrong(num: number): boolean {
    let digits = num.toString().length;
    let temp = num;
    let sum = 0;

    while (temp > 0) {
        let digit = temp % 10;
        sum += digit ** digits;
        temp = Math.floor(temp / 10);
    }

    return sum === num;
}

console.log(isArmstrong(153));