for (let i = 0; i < 5; ) {
  console.log((i += 1));
}
// This works even though the incrementor is missing from the initial for statement
// It is evaluated from within the console.log statement
