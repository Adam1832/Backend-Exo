function average(input) {
    if (input.length === 0) return 0;
    const sum = input.reduce((acc, val) => acc + val, 0);
    return sum / input.length;
}
