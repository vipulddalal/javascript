const assert = require('chai').assert;
const { isPrimeNumber } = require('./yourPrimeNumberCheckingProgram'); // Import your program's function

describe('isPrimeNumber', function () {
    it('should return true for prime numbers', function () {
        assert.isTrue(isPrimeNumber(2));
        assert.isTrue(isPrimeNumber(3));
        assert.isTrue(isPrimeNumber(5));
        assert.isTrue(isPrimeNumber(7));
        assert.isTrue(isPrimeNumber(11));
        // Add more test cases for other prime numbers
    });

    it('should return false for non-prime numbers', function () {
        assert.isFalse(isPrimeNumber(1));
        assert.isFalse(isPrimeNumber(4));
        assert.isFalse(isPrimeNumber(6));
        assert.isFalse(isPrimeNumber(8));
        assert.isFalse(isPrimeNumber(9));
        // Add more test cases for other non-prime numbers
    });

    it('should handle negative numbers and zero appropriately', function () {
        assert.isFalse(isPrimeNumber(0));
        assert.isFalse(isPrimeNumber(-2));
        // Add more test cases for negative numbers and zero
    });

    it('should handle invalid input (non-numeric input)', function () {
        assert.isFalse(isPrimeNumber('abc'));
        assert.isFalse(isPrimeNumber(null));
        assert.isFalse(isPrimeNumber(undefined));
        // Add more test cases for invalid input
    });
});
