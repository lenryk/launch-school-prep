let words = [
  "laboratory",
  "experiment",
  "flab",
  "Pans Labyrinth",
  "elaborate",
  "polar bear",
];

function allMatches(words, regex) {
  let output = [];
  words.map((ele) => {
    if (regex.test(ele)) output.push(ele);
  });
  return output;
}

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']
