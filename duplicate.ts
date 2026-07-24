function removeDuplicates(str: string): string {
    let result = "";

    for (let ch of str) {
        if (!result.includes(ch))
            result += ch;
    }

    return result;
}

console.log(removeDuplicates("programming"));