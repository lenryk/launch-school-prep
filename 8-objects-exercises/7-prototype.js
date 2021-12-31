let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

myObj.qux = 3;

let objKeys = Object.keys(myObj);
objKeys.forEach(function (key) {
  console.log(key);
});
// This logs all keys on the myObj and includes the keys from the prototype

for (let key in myObj) {
  console.log(key);
}
// This only logs the keys on the myObj object and not the prototype
