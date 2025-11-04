function average(input) {
    if (input.length === 0) return 0;
    const sum = input.reduce((acc, val) => acc + val, 0);
    return sum ;
}

function getMinimum(values) {
    if (values.length === 0) return null;
    return Math.min (...values);
}



module.exports = { 
    average,
    getMinimum
 };