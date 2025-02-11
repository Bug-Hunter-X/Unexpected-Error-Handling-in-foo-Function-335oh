# Unexpected Error Handling in JavaScript Function

This repository demonstrates a common JavaScript error related to unexpected behavior when function inputs are 0 and the potential for division by zero. The `foo` function is initially designed to return 0 if either input is 0. Additionally, if the denominator (b) is 0, an error will occur. This can be avoided by implementing proper error handling.

## Bug

The `bug.js` file contains the original faulty implementation of the `foo` function. The function does not handle the case where b is 0, causing an error. It also returns 0 when either a or b is 0, but this behavior is not explicitly stated or necessarily intuitive.

## Solution

The `bugSolution.js` file demonstrates a corrected implementation. It explicitly checks for cases where either input is 0 or where division by zero would occur, providing a more robust and user-friendly experience.