# Type 'string' is not assignable to type 'number'

This TypeScript bug demonstrates a common type error.  The `add` function expects two numbers, but a string ('10') is passed as the second argument. This results in a compile-time error because TypeScript's type system prevents this type mismatch.

The solution involves type checking or converting the string argument to a number before passing it to the function.