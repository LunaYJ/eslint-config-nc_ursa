function foo() {
  var b = 'bar';

  console.log(b);

  var err = 'err';
  throw err;
}
console.log(foo());

var obj = { a: 1, b: 2 }; var arr = [ 1, 2, 3 ];

console.log(arr);

var F = function (obj = {}) {
  console.log(obj);
};

var fun = (obj = {}) => {
  console.log(obj.c = 3);
};

F(obj);

fun(obj);
