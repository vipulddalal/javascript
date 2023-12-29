// prime.test.js

const isPrime = require('./prime');

describe('isPrime function', () => {
  test('should return false for non-prime numbers', () => {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(10)).toBe(false);
  });

  test('should return true for prime numbers', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(17)).toBe(true);
  });

  test('should return false for negative numbers', () => {
    expect(isPrime(-5)).toBe(false);
    expect(isPrime(-10)).toBe(false);
  });

  test('should return false for non-integer numbers', () => {
    expect(isPrime(5.5)).toBe(false);
    expect(isPrime(10.2)).toBe(false);
  });

  test('should return false for strings', () => {
    expect(isPrime('abc')).toBe(false);
  });
});
