let counter = 0;

while ((counter = 1)) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

// The statement is using one = which is an assignent operater - therefore the expression is being evaulated to true
// To fix this it should be counter == 2
