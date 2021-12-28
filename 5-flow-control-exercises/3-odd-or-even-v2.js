function evenOrOdd(int) {
  if (typeof int !== "number") {
    console.log("ERROR: Integers only!");
  } else {
    if (int % 2 === 0) {
      console.log("Even");
    } else {
      console.log("Odd");
    }
  }
}

evenOrOdd(2);
evenOrOdd(1);
evenOrOdd(5);
evenOrOdd("test");
