function foo(a, b) {
  if (a === 0 || b === 0) {
    if (a === 0 && b === 0) {
      return NaN; // Handle the case where both a and b are 0
    } else if (b === 0) {
      return Infinity; // Handle the case where b is 0
    } else {
      return 0; // Handle the case where either a or b is 0
    }
  }
  return a / b; 
} 