function fibonacci(n) {
    if (n < 0) {
        throw new Error("Input must be a non-negative integer");
    }
    if (n === 0) {
        return 0;
    }
    if (n === 1 || n === 2) {
        return 1;
    }
    
}
module.exports = { fibonacci };