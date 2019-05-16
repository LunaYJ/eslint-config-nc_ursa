# eslint-config-nc_ursa

诺锞 PT事业部URSA 前端js规范

参考了 [JavaScript Standard Style](https://standardjs.com/readme-zhcn.html) 规范 并根据 公司前端成员习惯 做了一些修改调整

---

## 细则
### 禁止
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
	
* 禁用未声明的变量 除非它们在 /*global */ 注释中被提到。
  
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
	function my_function() { };    // ✗ avoid
	function myFunction() { };     // ✓ ok
	 
	var my_var = 'hello';           // ✗ avoid
	var myVar = 'hello';            // ✓ ok
	```

* 最后一个元素与闭括号在*同一行*时禁止多余的行末逗号，*不同行*时要求行末逗号
  
  eslint: comma-dangle

	```js
	// ✓ ok
	var foo = {
	  bar: "baz",
	  qux: "quux",
	};
	
	var foo = {bar: "baz", qux: "quux"};
	
	
	// ✗ avoid
	var foo = {
	  bar: "baz",
	  qux: "quux"
	};
	
	var foo = { bar: "baz", qux: "quux", };
	
	```

* 始终将逗号置于行末。
  
  eslint: comma-style
  
	```js
	var obj = {
	  foo: 'foo'
	  ,bar: 'bar'   // ✗ avoid
	};
		 
	var obj = {
	  foo: 'foo',
	  bar: 'bar'   // ✓ ok
	}
	```
	
* 点号操作符须与属性需在同一行。
  
  eslint: dot-location
  
	```js
	console.
	  log('hello');  // ✗ avoid
	 
	console
	  .log('hello'); // ✓ ok
	```

* 函数调用时标识符与括号间不留间隔。
  
  eslint: func-call-spacing
  
	```js
	console.log ('hello'); // ✗ avoid
	console.log('hello');  // ✓ ok
	```

* 键值对当中冒号与值之间要留空白。
  
  eslint: key-spacing
  
	```js
	var obj = { 'key' : 'value' };    // ✗ avoid
	var obj = { 'key' :'value' };     // ✗ avoid
	var obj = { 'key':'value' };      // ✗ avoid
	var obj = { 'key': 'value' };     // ✓ ok
	```

* 构造函数要以大写字母开头。
  
  eslint: new-cap
  
	```js
	function animal () {};
	var dog = new animal();    // ✗ avoid
	 
	function Animal () {};
	var dog = new Animal();    // ✓ ok
	```

* 无参的构造函数调用时要带上括号。
  
  eslint: new-parens
  
	```js
	function Animal () {};
	var dog = new Animal;    // ✗ avoid
	var dog = new Animal();  // ✓ ok
	```

* 强制 getter 和 setter 在对象中成对出现
  
  eslint: accessor-pairs
  
	```js
	var person = {
	  set name (value) {    // ✗ avoid
		this._name = value
	  }
	};
	 
	var person = {
	  set name (value) {
		this._name = value
	  },
	  get name () {         // ✓ ok
		return this._name
	  }
	}
	```

* 子类的构造器中一定要调用 super
  
  eslint: constructor-super
  
	```js
	class Dog {
	  constructor () {
		super()   // ✗ avoid
	  }
	}
	 
	class Dog extends Mammal {
	  constructor () {
		super()   // ✓ ok
	  }
	}
	```

* 使用数组字面量而不是构造器。
  
  eslint: no-array-constructor
  
	```js
	var nums = new Array(1, 2, 3);   // ✗ avoid
	var nums = [1, 2, 3];            // ✓ ok
	```

* 禁用 arguments.callee 和 arguments.caller。
  
  eslint: no-caller
  
* 避免对类名重新赋值。
  
  eslint: no-class-assign
  
* 避免修改使用 const 声明的变量。
  
  eslint: no-const-assign
  
* 避免使用常量作为条件表达式的条件（循环语句除外）。
  
  eslint: no-constant-condition

* 正则中不要使用控制符。
  
  eslint: no-control-regex
  
	```js
	var pattern1 = /\x1f/; // ✗ avoid
	
	var pattern1 = /\x20/; // ✓ ok
	```
	
* 不要使用 debugger。（开发环境中可以使用, 请自己额外覆盖规则 不要修改原规则）
  
  eslint: no-debugger
	
* 禁止删除变量。
  
  eslint: no-delete-var
  
* 禁止 function 定义中出现重名参数。
  
  eslint: no-dupe-args

* 禁止类成员中出现重复的名称。
  
  eslint: no-dupe-class-members
  
* 禁止对象字面量中出现重复的 key。
  
  eslint: no-dupe-keys
  
* switch 语句中不要定义重复的 case 分支。
  
  eslint: no-duplicate-case

* 禁止重复模块导入。
  
  eslint: no-duplicate-imports
  
	```js
	// ✗ avoid
	import { myFunc1 } from 'module';
	import { myFunc2 } from 'module';         
	 
	// ✓ ok
	import { myFunc1, myFunc2 } from 'module';
	```

* 禁止在正则表达式中使用空字符集。
  
  eslint: no-empty-character-class

* 禁止使用空解构模式。
  
  eslint: no-empty-pattern

* 不要使用 eval()。
  
  eslint: no-eval
  
* catch 中不要对错误重新赋值。
  
  eslint: no-ex-assign
  
	```js
	try {
	  // ...
	} catch (e) {
	  e = 'new value';             // ✗ avoid
	}
	 
	try {
	  // ...
	} catch (e) {
	  const newVal = 'new value';  // ✓ ok
	}
	```
  
* 禁止扩展原生对象。  
  例外：Array，Object
  
  eslint: no-extend-native

* 避免多余的函数上下文绑定。
  
  eslint: no-extra-bind
  
	```js
	const name = function () {
	  getName();
	}.bind(user);    // ✗ avoid
	 
	const name = function () {
	  this.getName();
	}.bind(user);    // ✓ ok
	```

* 避免不必要的布尔转换。
  
  eslint: no-extra-boolean-cast
  
	```js
	const result = true;
	if (!!result) {   // ✗ avoid
	  // ...
	}
	 
	const result = true;
	if (result) {     // ✓ ok
	  // ...
	}
	```

* 不要使用多余的括号包裹函数。
  
  eslint: no-extra-parens
  
	```js
	const myFunc = (function () { });   // ✗ avoid
	const myFunc = function () { };     // ✓ ok
	```
	
* switch 禁止 case 语句落空。（禁止switch穿透 如果要强制穿透落空 请在 在落空段末尾 加 `// fallthrough`）
  
  eslint: no-fallthrough
  
	```js
	switch (filter) {
	  case 1:
	    doSomething();    // ✗ avoid
	  case 2:
	    doSomethingElse();
	}
	
	switch (filter) {
	  case 1:
	    doSomething();
	    break;           // ✓ ok
	  case 2:
	    doSomethingElse();
	}
	
	switch (filter) {
	  case 1:
	    doSomething();
	    // fallthrough  // ✓ ok
	  case 2:
	    doSomethingElse();
	}
	```

* 不要省去小数点前面的0。
  
  eslint: no-floating-decimal
  
	```js
	const discount = .5;      // ✗ avoid
	const discount = 0.5;     // ✓ ok
	```
  
* 避免对声明过的函数重新赋值。
  
  eslint: no-func-assign
  
	```js
	function myFunc () { };
	myFunc = myOtherFunc;    // ✗ avoid
	```

* 不要对全局只读对象重新赋值。
  
  eslint: no-global-assign
  
	```js
	window = {};     // ✗ avoid
	```
  
* 注意隐式的 eval()。
  
  eslint: no-implied-eval
  
* 禁止在嵌套的块中出现变量声明或 function 声明。
  
  eslint: no-inner-declarations
  
	```js
	if (authenticated) {
	  function setAuthUser () {};    // ✗ avoid
	}
	```

* 不要向 RegExp 构造器传入非法的正则表达式。
  
  eslint: no-invalid-regexp
  
	```js
	RegExp('[a-z');    // ✗ avoid
	RegExp('[a-z]');   // ✓ ok
	```

* 不要使用非法的空白符。
  
  eslint: no-irregular-whitespace
  
	```js
	function myFunc () /*<NBSP>*/{};   // ✗ avoid
	```

* 禁止使用 \_\_iterator\_\_。
  
  eslint: no-iterator
  
* 不允许标签与变量同名。
  
  eslint: no-label-var
  
* 不要使用标签语句。
  
  eslint: no-labels
  
	```js
	label:
	  while (true) {
		break label;     // ✗ avoid
	  }
	
	```
	
* 不要书写不必要的嵌套代码块。
  
  eslint: no-lone-blocks
  
	```js
	function myFunc () {
	  {                   // ✗ avoid
		myOtherFunc();
	  };
	};
	 
	function myFunc () {
	  myOtherFunc();       // ✓ ok
	};
	```

* 禁止混用tab和空格。  
  例外：当 tab 是为了对齐，允许混合使用空格和 tab。
  
  eslint: no-mixed-spaces-and-tabs
  
* 除了缩进，不要使用多个空格。
  
  eslint: no-multi-spaces
  
	```js
	const id =    1234;    // ✗ avoid
	const id = 1234;       // ✓ ok
	```

* 字符串不能用\换行。
  
  eslint: no-multi-str
  
	```js
	// ✗ avoid
	const message = 'Hello \
					 world';     
	
	// ✓ ok                 
	const x = "Line 1\n" +
			"Line 2";
	```

* new 创建对象实例后需要赋值给变量。
  
  eslint: no-new
  
	```js
	new Character();                     // ✗ avoid
	const character = new Character();   // ✓ ok
	```

* 禁止使用 Function 构造器。
  
  eslint: no-new-func
  
	```js
	var sum = new Function('a', 'b', 'return a + b');    // ✗ avoid
	```

* 禁止使用 Object 构造器。
  
  eslint: no-new-object
  
	```js
	let config = new Object();   // ✗ avoid
	```

* 禁止使用 new require。
  
  eslint: no-new-require
  
* 禁止使用 Symbol 构造器。
  
  eslint: no-new-symbol

* 禁止原始包装（ String、Number 和 Boolean ）实例。
  
  eslint: no-new-wrappers
  
	```js
	const message = new String('hello');   // ✗ avoid
	```

* 不要将全局对象的属性作为函数调用。
  
  eslint: no-obj-calls
  
	```js
	const math = Math();   // ✗ avoid
	```

* 不要使用八进制字面量。
  
  eslint: no-octal

* 字符串字面量中也不要使用八进制转义字符（应该使用 Unicode 转义序列）。
  
  eslint: no-octal-escape

* 使用 \_\_dirname 和 \_\_filename 时尽量避免使用字符串拼接。
  
  eslint: no-path-concat
  
	```js
	const pathToFile = __dirname + '/app.js';            // ✗ avoid
	const pathToFile = path.join(__dirname, 'app.js');   // ✓ ok
	```

* 禁用 \_\_proto\_\_ 属性。
  
  eslint: no-proto

	```js
	const foo = obj.__proto__;               // ✗ avoid
	const foo = Object.getPrototypeOf(obj);  // ✓ ok
	```
	
* 不要重复声明变量。
  
  eslint: no-redeclare
  
* 正则中避免使用多个空格。
  
  eslint: no-regex-spaces

* return 语句中的赋值必需有括号包裹。
  
  eslint: no-return-assign
  
	```js
	function sum (a, b) {
	  return result = a + b;     // ✗ avoid
	};
	 
	function sum (a, b) {
	  return (result = a + b);   // ✓ ok
	};
	```
	
* 禁止自我赋值。
  
  eslint: no-self-assign
  
	```js
	name = name;   // ✗ avoid
	```

* 避免将变量与自己进行比较操作。
  
  esint: no-self-compare

	```js
	if (score === score) {}   // ✗ avoid
	```
	
* 避免使用逗号操作符。
  
  eslint: no-sequences
  
	```js
	if (doSomething(), !!test) {}   // ✗ avoid
	```

* 不要随意更改关键字的值。
  
  eslint: no-shadow-restricted-names
  
	```js
	let undefined = 'value';     // ✗ avoid
	```

* 禁止使用稀疏数组（Sparse arrays）。
  
  eslint: no-sparse-arrays
  
	```js
	let fruits = ['apple',, 'orange'];       // ✗ avoid
	```
	
* 不要使用制表符。
  
  eslint: no-tabs

* 使用 this 前请确保 super() 已调用。
  
  eslint: no-this-before-super

	```js
	// ✗ avoid
	class Dog extends Animal {
	  constructor () {
		this.legs = 4;     
		super();
	  }
	}
	
	// ✓ ok
	class Dog extends Animal {
	  constructor () {
		super();	
		this.legs = 4;     
	  }
	}
	```

* 用 throw 抛错时，抛出 Error 对象而不是字符串。
  
  eslint: no-throw-literal
  
	```js
	// ✗ avoid
	throw 'err'; 
	
	// ✓ ok
	const err = 'err';
	throw err;
	```
  
* 不要使用 undefined 来初始化变量。
  
  eslint: no-undef-init

	```js
	let name = undefined;    // ✗ avoid
	 
	let name;
	name = 'value';          // ✓ ok
	```
	
* 循环语句中注意更新循环变量。
  
  eslint: no-unmodified-loop-condition
  
	```js
	for (let i = 0; i < items.length; j++) {...}    // ✗ avoid
	for (let i = 0; i < items.length; i++) {...}    // ✓ ok
	```
  
* 如果有更好的实现，尽量不要使用三元表达式。
  
  eslint: no-unneeded-ternary
  
	```js
	let score = val ? val : 0;     // ✗ avoid
	let score = val || 0;          // ✓ ok
	```
	
* return，throw，continue 和 break 后不要再跟代码。
  
  eslint: no-unreachable
  
* finally 代码块中不要再改变程序执行流程。
  
  eslint: no-unsafe-finally
  
	```js
	// ✗ avoid
	let foo = function() {
	  try {
		return 1;
	  } catch(err) {
		return 2;
	  } finally {
		return 3;
	  }
	};
	
	// ✓ ok
	let foo = function() {
	  try {
		return 1;
	  } catch(err) {
		return 2;
	  } finally {
		console.log("hola!");
	  }
	};
	```
  
* 关系运算符的左值不要做取反操作。
  
  eslint: no-unsafe-negation
  
	```js
	if (!key in obj) {}       // ✗ avoid
	```
  
* 避免不必要的 .call() 和 .apply()。
  
  eslint: no-useless-call
  
	```js
	sum.call(null, 1, 2, 3);   // ✗ avoid
	```
  
* 避免使用不必要的计算值作对象属性。
  
  eslint: no-useless-computed-key
  
	```js
	const user = { ['name']: 'John Doe' };   // ✗ avoid
	const user = { name: 'John Doe' };       // ✓ ok
	```
	
* 禁止多余的构造器。
  
  eslint: no-useless-constructor
  
* 禁止不必要的转义。
  
  eslint: no-useless-escape
  
	```js
	let message = 'Hell\o';  // ✗ avoid
	```
* import, export 和解构操作中，禁止赋值到同名变量。
  
  eslint: no-useless-rename
  
	```js
	import { config as config } from './config';     // ✗ avoid
	import { config } from './config';               // ✓ ok
	```

* 属性前面不要加空格。
  
  eslint: no-whitespace-before-property
  
	```js
	user .name      // ✗ avoid
	user.name       // ✓ ok
	```

* 禁止使用 with。
  
  eslint: no-with
  
* 对象属性换行时注意统一代码风格。
  
  eslint: object-property-newline
  
	```js
	// ✗ avoid
	const user = {
	  name: 'Jane Doe', age: 30,
	  username: 'jdoe86'            
	};
	 

	// ✓ ok
	const user = { name: 'Jane Doe', age: 30, username: 'jdoe86' };    
	 
	const user = {
	  name: 'Jane Doe',
	  age: 30,
	  username: 'jdoe86'
	};              
	```
	
* 代码块中避免多余留白。
  
  eslint: padded-blocks
  
	```js
	// ✗ avoid
	if (user) {
								
	  const name = getName()
	 
	}
	 
	// ✓ ok
	if (user) {
	  const name = getName()    
	}
	```
	
* 展开运算符与它的表达式间不要留空白。
  
  eslint: rest-spread-spacing
	  
	```js
	fn(... args);    // ✗ avoid
	fn(...args);     // ✓ ok
	```

* 遇到分号时空格要后留前不留。
  
  eslint: semi-spacing

	```js
	for (let i = 0 ;i < items.length ;i++) {...}    // ✗ avoid
	for (let i = 0; i < items.length; i++) {...}    // ✓ ok
	```

* 代码块首尾留空格。
  
  eslint: space-before-blocks
  
	```js
	if (admin){...}     // ✗ avoid
	if (admin) {...}    // ✓ ok
	```

* 圆括号间不留空格。
  
  eslint: space-in-parens
  
	```js
	getName( name );     // ✗ avoid
	getName(name);       // ✓ ok
	```

* 一元运算符后面跟一个空格。
  
  eslint: space-unary-ops

	```js
	typeof!admin;        // ✗ avoid
	typeof !admin;        // ✓ ok
	```

* 注释首尾留空格。
  
  eslint: spaced-comment
  
	```js
	//comment           // ✗ avoid
	// comment          // ✓ ok
	 
	/*comment*/         // ✗ avoid
	/* comment */       // ✓ ok
	```

* 模板字符串中变量前后不加空格。
  
  eslint: template-curly-spacing
  
	```js
	const message = `Hello, ${ name }`;    // ✗ avoid
	const message = `Hello, ${name}`;      // ✓ ok
	```
	
* 检查 NaN 的正确姿势是使用 isNaN()。
  
  eslint: use-isnan
  
	```js
	if (price === NaN) { }      // ✗ avoid
	if (isNaN(price)) { }       // ✓ ok
	```

* 用合法的字符串跟 typeof 进行比较操作。
  
  eslint: valid-typeof
  
	```js
	typeof name === 'undefimed';     // ✗ avoid
	typeof name === 'undefined';     // ✓ ok
	```

* 自调用匿名函数 (IIFEs) 使用括号包裹。
  
  eslint: wrap-iife
  
	```js
	const getName = function () { }();     // ✗ avoid
	 
	const getName = (function () { }());   // ✓ ok
	const getName = (function () { })();   // ✓ ok
	```
	
* yield* 中的 * 后都要有空格。
  
  eslint: yield-star-spacing
  
	```js
	yield * increment();   // ✗ avoid
	yield* increment();    // ✓ ok
	```
  
* 请书写优雅的条件语句（avoid Yoda conditions）。
  
  eslint: yoda
  
	```js
	if (42 === age) { }    // ✗ avoid
	if (age === 42) { }    // ✓ ok
	```

* 要求使用分号代替 ASI。
  
  eslint: semi
  
	```js
	// ✗ avoid
	var a = 'a'
	
	// ✓ ok
	var a = 'a';
	```
	
* 禁止空块语句（若要为空 请添加适当注释）

  eslint: no-empty
  
	```js
	// ✗ avoid
	if (foo) {
	}
	
	// ✓ ok
	if (foo) {
	  // empty
	}
	```
	
* 禁用不必要的分号

  eslint: no-extra-semi
  
	```js
	// ✗ avoid
	var x = 5;;
	
	// ✓ ok
	var x = 5;
	```
* 禁用未使用过的标签

  eslint: no-unused-labels
  
* 禁用函数内没有yield的 generator 函数

  eslint: require-yield
  
	```js
	// ✗ avoid
	function* foo() {
	  return 10;
	}
	
	// ✓ ok
	function* foo() {
	  yield 5;
	  return 10;
	}
	function foo() {
	  return 10;
	}
	function* foo() { }
	```
### 警告

* 正确使用 ES6 中的字符串模板。（ES3/5 下请忽略这条警告）
  
  eslint: no-template-curly-in-string

* 行末不留空格。
  
  eslint: no-trailing-spaces

### 允许 (相比*eslint:recommended*)

* 允许在 case 子句中使用词法声明

  eslint: no-case-declarations

* 允许 console

  eslint: no-console
