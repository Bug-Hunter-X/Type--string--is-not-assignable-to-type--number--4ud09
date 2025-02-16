function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: string | number): number {
  const numB = typeof b === 'string' ? parseFloat(b) : b;
  if (isNaN(numB)) {
    throw new Error('Invalid input: b must be a number or a parsable string.');
  }
  return a + numB;
}

const result1 = add(5, 10); // Works correctly
const result2 = addSafe(5, '10'); // Works correctly after type check and conversion
const result3 = addSafe(5, "abc"); //Throws an error because "abc" can not be converted to number