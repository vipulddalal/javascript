function calculateFactorial(number) {
    // Check if the number is negative
    if (number < 0) {
        console.error("Error: Factorial is not defined for negative numbers.");
        return;
    }

    // Check if the number is a floating-point number
    if (number % 1 !== 0) {
        console.error("Error: Factorial is not defined for floating-point numbers.");
        return;
    }

    // Calculate the factorial
    let factorial = 1;
    for (let i = 2; i <= number; i++) {
        factorial *= i;
    }

    console.log(`The factorial of ${number} is ${factorial}.`);
}

// Example usage
calculateFactorial(5); // Output: The factorial of 5 is 120.
calculateFactorial(-2); // Output: Error: Factorial is not defined for negative numbers.
calculateFactorial(3.5); // Output: Error: Factorial is not defined for floating-point numbers.
