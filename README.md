# eslint-config-nc_ursa

诺锞 PT事业部URSA 前端js规范

参考 [JavaScript Standard Style](https://standardjs.com/readme-zhcn.html) 规范 并根据 公司前端成员习惯 做了一些调整

---

### 细则
* 使用两个空格进行缩进。  

	eslint: indent
	
	```js
	function foo() {
	  console.log('foo');
	}
	```
	
* 除需要转义的情况外，字符串统一使用单引号。  

	eslint: quotes
	
	```js
	console.log('Hello URSA');
	$("<div class='ursa'>")
	```
	
* 不要定义未使用的变量。  

	eslint: no-unused-vars
	
	```js
	function myFunction() { 
	  var result = something() // ✗ avoid
	}
	```

* 关键字后面加空格。  

	eslint: keyword-spacing
	
	```js
	if (condition) { ... }   // ✓ ok
	if(condition) { ... }    // ✗ avoid
	```

* 函数声明时括号与函数名间不加空格（匿名函数括号前要加空格）。
  
  eslint: space-before-function-paren
	
	```js
	function name(arg) { ... }   // ✓ ok
	function name (arg) { ... }    // ✗ avoid
	 
	run(function () { ... })      // ✓ ok
	run(function() { ... })       // ✗ avoid
	```
	
* 始终使用 === 替代 ==。  

  eslint: eqeqeq

* 字符串拼接操作符 (Infix operators) 之间要留空格。
  
  eslint: space-infix-ops

	```js
	// ✓ ok
	var x = 2;
	var message = 'hello, ' + name + '!';
	```
* 逗号后面加空格。
  
  eslint: comma-spacing
  
	```js
	// ✓ ok
	var list = [1, 2, 3, 4];
	function greet(name, options) { ... }
	```
* else 关键字要与花括号保持在同一行。
  
  eslint: brace-style
  
	```js
	// ✓ ok
	if (condition) {
	  // ...
	} else {
	  // ...
	}
	```
* 多行 if 语句的的括号不能省。
  
  eslint: curly
  
	```js
	// ✓ ok
	if (options.quiet !== true) console.log('done');
	
	if (options.quiet !== true) {
	  console.log('done');
	}
	```
* 不要丢掉异常处理中err参数。
  
  eslint: handle-callback-err
  
	```js
	// ✓ ok
	run(function (err) {
	  if (err) throw err;
	  window.alert('done' );
	})
	```
	
* 使用浏览器全局变量时加上 window. 前缀。
  例外: document, console and navigator.
  
  eslint: no-undef
  
	```js
	window.alert('URSA')   // ✓ ok
	```
* 连续的空行不得超过1行。
  
  eslint: no-multiple-empty-lines
  
	```js
	// ✓ ok
	var value = 'hello world';
	
	console.log(value);
	```
	```js
	// ✗ avoid
	var value = 'hello world';
	 
	 
	console.log(value);
	```

* 对于三元运算符 ? 和 : 与他们所负责的代码处于同一行
  
  eslint: operator-linebreak
  
	```js
	// ✓ ok
	var location = env.development ? 'localhost' : 'www.api.com';
	 
	// ✓ ok
	var location = env.development
	  ? 'localhost'
	  : 'www.api.com';

	// ✗ avoid
	var location = env.development ?
	  'localhost' :
	  'www.api.com';
	```
	
* 每个 var 关键字单独声明一个变量。
  
  eslint: one-var
  
	```js
	// ✓ ok
	var silent = true;
	var verbose = true;
	 
	// ✗ avoid
	var silent = true, verbose = true;
	 
	// ✗ avoid
	var silent = true,
	    verbose = true;
	```

* 条件语句中赋值语句使用括号包起来。这样使得代码更加清晰可读，而不会认为是将条件判断语句的全等号（===）错写成了等号（=）。
  
  eslint: no-cond-assign
  
	```js
	// ✓ ok
	while ((m = text.match(expr))) {
	  // ...
	}
	 
	// ✗ avoid
	while (m = text.match(expr)) {
	  // ...
	}
	```

* 单行代码块两边加空格。
  
  eslint: block-spacing
  
	```js
	function foo() {return true}    // ✗ avoid
	function foo() { return true }  // ✓ ok
	```

* 对于变量和函数名统一使用驼峰命名法。
  
  eslint: camelcase
  
	```js
	function my_function() { }    // ✗ avoid
	function myFunction() { }     // ✓ ok
	 
	var my_var = 'hello'           // ✗ avoid
	var myVar = 'hello'            // ✓ ok
	```
