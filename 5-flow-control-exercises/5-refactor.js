return foo() ? "bar" : qux();
// Old code

if (foo()) {
  return "bar";
} else {
  return qux();
}
// Refactor into if..else statement
