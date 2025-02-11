function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; // Unexpected behavior if a or b is 0
  }
  return a / b; // This will throw an error if b is 0, but we should handle that case
}