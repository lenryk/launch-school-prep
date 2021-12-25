let foo = "bar";
{
  let foo = "qux";
}

console.log(foo);
// This logs bar to the console as it is the only variable named foo within the scope
