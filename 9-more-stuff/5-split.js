function doSomething(string) {
  return string
    .split(" ")
    .reverse()
    .map((value) => value.length);
}

console.log(doSomething("this is a test"));
// Returns an array with the individual length of words from a sentence after splitting words via spaces, reversing them and returning the length of each word
