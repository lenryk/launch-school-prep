let foo = {
  a: "hello",
  b: "world",
};

let qux = "hello";

function bar(argument1, argument2) {
  argument1.a = "hi";
  argument2 = "hi";
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);
// This will log "hi" and "hello" as foo.a is an object it is passed by references and changes it. Qux is a primitive string and is immutable
