const FOO = "bar";
{
  const FOO = "qux";
}

console.log(FOO);
// This code will not throw an error as it is declaring a new const variable within a seperate scope. As the console.log is outside of the scope the inner one will be ignored.
