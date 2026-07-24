function binaryToDecimal(binary: string): number {
    let decimal = 0;

    for (let i = 0; i < binary.length; i++) {
        decimal = decimal * 2 + Number(binary[i]);
    }

    return decimal;
}

console.log(binaryToDecimal("1010"));