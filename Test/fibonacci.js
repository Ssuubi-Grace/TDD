function fibonacci(n) {
    if (n < 0) {
        throw new Error("Input must be a non-negative integer");
    }
    if (n === 0) {
        return 0;
    }
    
}
module.exports = { fibonacci };