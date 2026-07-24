function charFrequency(str: string): void {
    let map = new Map<string, number>();

    for (let ch of str) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }

    console.log(map);
}

charFrequency("programming");