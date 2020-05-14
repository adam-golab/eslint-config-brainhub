# RULES

List of defined rules. Rules not described here are imported from `eslint:recommended`, `plugin:react/recommended` and `plugin:import/errors`.

## Table of Contents

1. [Possible Errors](#possible-errors)
2. [Best Practices](#best-practices)
3. [Variables](#variables)
4. [Stylistic Issues](#stylistic-issues)
5. [ECMAScript 6](#ecmascript-6)
6. [React](#react)
7. [JSX](#jsx)
8. [Import](#import)

## Possible Errors

### no-cond-assign (**error**)

Disallows ambiguous assignment operators in test conditions of if, for, while, and do...while statements.

```javascript
// INCORRECT
if (user.jobTitle = "manager") {
  // user.jobTitle is now incorrect
}
```

### no-console (**warning**)

Disallows calls to methods of the `console` object.

### no-debugger (**error**)

disallows debugger statements.

### no-irregular-whitespace (**error**)

This rule is aimed at catching invalid whitespace that is not a normal tab and space. Some of these characters may cause issues in modern browsers and others will be a debugging issue to spot.

### no-unexpected-multiline (**error**)

This rule disallows confusing multiline expressions where a newline looks like it is ending a statement, but is not.

```javascript
// INCORRECT
let foo = bar
(1 || 2).baz();

const hello = 'world'
[1, 2, 3].forEach(addNumber);

let x = function() {}
`hello`

let x = function() {}
x
`hello`

let x = foo
/regex/g.test(bar)

// CORRECT
let foo = bar;
(1 || 2).baz();

let foo = bar
;(1 || 2).baz()

const hello = 'world';
[1, 2, 3].forEach(addNumber);

const hello = 'world'
void [1, 2, 3].forEach(addNumber);

let x = function() {};
`hello`

let tag = function() {}
tag `hello`
```

### no-unsafe-negation (**error**)

Disallows negating the left operand of Relational Operators (`in` and `instanceof`).

```javascript
// INCORRECT
if (!key in object) {
  // operator precedence makes it equivalent to (!key) in object
  // and type conversion makes it equivalent to (key ? "false" : "true") in object
}

if (!obj instanceof Ctor) {
  // operator precedence makes it equivalent to (!obj) instanceof Ctor
  // and it equivalent to always false since boolean values are not objects.
}

// CORRECT
if (!(key in object)) {
  // key is not in object
}

if (!(obj instanceof Ctor)) {
  // obj is not an instance of Ctor
}

if(("" + !key) in object) {
  // make operator precedence and type conversion explicit
  // in a rare situation when that is the intended meaning
}
```

### valid-jsdoc (**error**)

Enforces valid and consistent JSDoc comments.

## Best Practices

### curly (**error**)

This rule is aimed at preventing bugs and increasing code clarity by ensuring that block statements are wrapped in curly braces. It will warn when it encounters blocks that omit curly braces.

```javascript
// INCORRECT
if (foo) foo++;

while (bar)
  baz();

if (foo) {
  baz();
} else qux();

//CORRECT
if (foo) {
  foo++;
}

while (bar) {
  baz();
}

if (foo) {
  baz();
} else {
  qux();
}
```

### default-case (**error**)

This rule aims to require default case in switch statements, even if the default case is empty.

### dot-notation (**error**)

This rule is aimed at maintaining code consistency and improving code readability by encouraging use of the dot notation style whenever possible. As such, it will warn when it encounters an unnecessary use of square-bracket notation.

```javascript
// INCORRECT
const x = foo["bar"];

// CORRECT
const x = foo.bar;
```

### eqeqeq (**error**)

This rule is aimed at eliminating the type-unsafe equality operators.

```javascript
// INCORRECT
if (x == 42) { }
if (foo != 'bar') { }

// CORRECT
if (x === 42) { }
if (foo !== 'bar') { }
```

### guard-for-in (**error**)

This rule is aimed at preventing unexpected behavior that could arise from using a for in loop without filtering the results in the loop. As such, it will warn when for in loops do not filter their results with an if statement.

```javascript
// INCORRECT
for (key in foo) {
  doSomething(key);
}

// CORRECT
for (key in foo) {
  if (Object.prototype.hasOwnProperty.call(foo, key)) {
    doSomething(key);
  }
  if ({}.hasOwnProperty.call(foo, key)) {
    doSomething(key);
  }
}
```

### no-alert (**warning**)

This rule is aimed at catching debugging code that should be removed and popup UI elements that should be replaced with less obtrusive, custom UIs. As such, it will warn when it encounters `alert`, `prompt`, and `confirm` function calls which are not shadowed.

```javascript
// INCORRECT
alert("here!");

confirm("Are you sure?");

prompt("What's your name?", "John Doe");
```

### no-caller (**error**)

The use of `arguments.caller` and `arguments.callee` make several code optimizations impossible. They have been deprecated in future versions of JavaScript and their use is forbidden in ECMAScript 5 while in strict mode.

This rule is aimed at discouraging the use of deprecated and sub-optimal code, but disallowing the use of `arguments.caller` and `arguments.callee`. As such, it will warn when `arguments.caller` and `arguments.callee` are used.

### no-empty-function (**error**)

This rule is aimed at eliminating empty functions. A function will not be considered a problem if it contains a comment.

### no-extend-native (**error**)

Disallows directly modifying the prototype of builtin objects.

```javascript
// INCORRECT
Object.prototype.a = "a";
Object.defineProperty(Array.prototype, "times", { value: 999 });
```

### no-extra-bind (**error**)

This rule is aimed at avoiding the unnecessary use of `bind()` and as such will warn whenever an immediately-invoked function expression (IIFE) is using `bind()` and doesn’t have an appropriate `this` value. This rule won’t flag usage of `bind()` that includes function argument binding.

Note: Arrow functions can never have their this value set using `bind()`. This rule flags all uses of `bind()` with arrow functions as a problem

### no-extra-label (**error**)

This rule is aimed at eliminating unnecessary labels.

### no-global-assign (**error**)

This rule disallows modifications to read-only global variables.

```javascript
// INCORRECT
Object = null;
undefined = 1;
window = {};
length = 1;
top = 1;
```

### no-invalid-this (**error**)

This rule aims to flag usage of this keywords outside of classes or class-like objects.

### no-labels (**error**)

This rule aims to eliminate the use of labeled statements in JavaScript. It will warn whenever a labeled statement is encountered and whenever break or continue are used with a label.

### no-loop-func (**error**)

Disallows function declarations and expressions inside loop statements

```javascript
// INCORRECT
for (let i = 0; i < 10; i++) {
  funcs[i] = function() {
    return i;
  };
}
```

### no-multi-spaces (**error**)

This rule aims to disallow multiple whitespace around logical expressions, conditional expressions, declarations, array elements, object properties, sequences and function parameters.

```javascript
// INCORRECT
let a =  1;

if(foo   === "bar") {}

a <<  b;

const arr = [1,  2];

a ?  b: c;
```

### no-multi-str (**error**)

This rule is aimed at preventing the use of multiline strings. It is recommended to use template template literals for multiline strings.

```javascript
// INCORRECT
const x = "Line 1 \
           Line 2";

// CORRECT
const x = "Line 1\n" +
          "Line 2";

const x = `Line 1
           Line 2`;
```

### no-new-func (**error**)

Disallows creating functions using the `Function` constructor. This is considered by many to be a bad practice due to the difficulty in debugging and reading these types of functions.

```javascript
// INCORRECT
const x = new Function("a", "b", "return a + b");
```

### no-new-wrappers (**error**)

This rule aims to eliminate the use of String, Number, and Boolean with the new operator.

```javascript
// INCORRECT
const stringObject = new String("Hello world");
let numberObject = new Number(33);
const booleanObject = new Boolean(false);

// CORRECT
const stringObject = String("Hello world");
const stringObject = 'Hello world';
let numberObject = Number(33);
let numberObject = 33;
const booleanObject = Boolean(false);
const booleanObject = false;
```

### no-new (**error**)

This rule is aimed at maintaining consistency and convention by disallowing constructor calls using the new keyword that do not assign the resulting object to a variable.

```javascript
// INCORRECT
new Thing();

// CORRECT
const thing = new Thing();

Thing();
```

### no-return-assign (**allowed**)

We discourage to use assignment in `return` statements, but this rule does not cooperate well with React refs.

```javascript
// DISCOURAGED
function doSomething() {
  return foo = bar + 2;
}

// EXCEPTION FOR REACT
<div ref={c => this.containerRef = c} />
```

### no-throw-literal (**error**)

This rule is aimed at maintaining consistency when throwing exception by disallowing to throw literals and other expressions which cannot possibly be an `Error` object.

```javascript
// INCORRECT
throw "error";

throw 0;

throw undefined;

throw null;

const err = new Error();
throw "an " + err;
// err is recast to a string literal

const err = new Error();
throw `${err}`

// CORRECT
throw new Error();

throw new Error("error");

const e = new Error("error");
throw e;

try {
  throw new Error("error");
} catch (e) {
  throw e;
}
```

### no-unmodified-loop-condition (**error**)

This rule finds references which are inside of loop conditions, then checks the variables of those references are modified in the loop.

```javascript
// INCORRECT
while (node) {
  doSomething(node);
}
node = other;

for (let j = 0; j < items.length; ++i) {
  doSomething(items[j]);
}

while (node !== root) {
  doSomething(node);
}

// CORRECT
while (node) {
  doSomething(node);
  node = node.parent;
}

for (let j = 0; j < items.length; ++j) {
  doSomething(items[j]);
}

while (node !== root) {
  doSomething(node);
  node = node.parent;
}
```

### no-useless-concat (**error**)

This rule aims to flag the concatenation of 2 literals when they could be combined into a single literal. Literals can be strings or template literals.

```javascript
// INCORRECT
const a = 'some' + 'string';
const a = '1' + '0';

// CORRECT
const a = 'somestring'
const a = '10';
```

### no-void (**error**)

This rule aims to eliminate use of void operator.

```javascript
// INCORRECT
void foo

const foo = void bar();
```

### no-warning-comments (**warning**)
Developers often add comments to code which is not complete or needs review. Most likely you want to fix or review the code, and then remove the comment, before you consider the code to be production ready. This rule reports comments that should be reviewed before deploying it to production. Reports warning on `todo`, `fixme` or `xxx` words in comment.

```javascript
// INCORRECT

// TODO: do something
// FIXME: this is not a good idea
// todo: this too
// Even this: TODO
```

### no-with (**error**)

The with statement is potentially problematic because it adds members of an object to the current scope, making it impossible to tell what a variable inside the block actually refers to. This rule disallows with statements.

```javascript
// INCORRECT
with (point) {
  r = Math.sqrt(x * x + y * y); // is r a member of point?
}

// CORRECT
const r = ({x, y}) => Math.sqrt(x * x + y * y);
```

### radix (**error**, *as-needed*)

This rule is aimed at preventing the unintended conversion of a string to a number of a different base than intended or at preventing the redundant 10 radix if targeting modern environments only.

```javascript
// INCORRECT
const num = parseInt("071", 10);

const num = parseInt("071", "abc");

const num = parseInt();

// CORRECT
const num = parseInt("071");

const num = parseInt("071", 8);

const num = parseFloat(someValue);
```

## Variables

### no-shadow (**allowed**)

We allow the situations where local variable shares the same name as a variable in its containing scope.

### no-undef (**error**)

This rule can help you locate potential ReferenceErrors resulting from misspellings of variable and parameter names, or accidental implicit globals (for example, from forgetting the `let` keyword in a `for` loop initializer).

```javascript
// INCORRECT
const a = someGlobalFunction();
b = 10;

// CORRECT
const a = global.someGlovalFunction();
global.b = 10;
```

### no-undefined (**error**)

This rule aims to eliminate the use of `undefined`, and as such, generates a warning whenever it is used. Because `undefined` can be overwritten or shadowed, reading `undefined` can give an unexpected value. We suggest using `null` (which is a keyword that always produces the same value) where is possible.

```javascript
// INCORRECT
const foo = undefined;
```

### no-unused-vars (**error**, *args*: 'after-used')

This rule is aimed at eliminating unused variables, functions, and parameters of functions.

```javascript
// INCORRECT
const x = 42;

let y = 10;
y = 5;

function foo(bar) {
  return 42;
}

function getSecondParam(x, y, z) {
  return y;
}

// CORRECT
const x = 42;
console.log(x);

let y = 10;
y = 5;
someFunction(y);

function foo() {
  return 42;
}

function getSecondParam(x, y) {
  return y;
}
```

### no-use-before-define (**error**)

This rule will warn when it encounters a reference to an identifier that has not yet been declared.

```javascript
// INCORRECT
console.log(a);
const a = 10;

f();
function f() {}

function g() {
  return b;
}
const b = 1;

{
  console.log(c);
  let c = 1;
}

// CORRECT
const a = 10;
console.log(a);

function f() {}
f();

const b = 1;
function g() {
  return b;
}

{
  let c = 1;
  console.log(c);
}
```

## Stylistic Issues

### array-bracket-spacing (**error**, *never*)

This rule enforces consistent spacing inside array brackets. We disallow spaces inside array brackets.

```javascript
// INCORRECT
const arr = [ 'foo', 'bar' ];
const [ x, y ] = z;

// CORRECT
const arr = ['foo', 'bar'];
const [x,y] = z;
const numbers = [
  1,
  2,
  3,
];
```

### brace-style (**error**, *1tbs*)

This rule enforces consistent brace style for blocks. We use the one true brace style, which is one of the most common brace styles in JavaScript, in which the opening brace of a block is placed on the same line as its corresponding statement or declaration.

```javascript
// INCORRECT
if (foo) {
  bar();
}
else {
  baz();
}

if (foo)
{
  bar();
}
else
{
  baz();
}

// CORRECT
if (foo) {
  bar();
} else {
  baz();
}
```

### camelcase (**error**, *always*)

When it comes to naming variables, style guides generally fall into one of two camps: camelcase (`variableName`) and underscores (`variable_name`). This rule focuses on using the camelcase approach.

```javascript
// INCORRECT
import { no_camelcased } from "external-module"

const my_favorite_color = "#112C85";

function do_something() {
  // ...
}

obj.do_something = function() {
  // ...
};

const obj = {
  my_pref: 1
};

// CORRECT
import { no_camelcased as camelCased } from "external-module";

const myFavoriteColor   = "#112C85";
const _myFavoriteColor  = "#112C85";
const myFavoriteColor_  = "#112C85";
const MY_FAVORITE_COLOR = "#112C85";

const { category_id: category } = query;
```

### comma-dangle (**error**, *always-multiline*)

This rule enforces consistent use of trailing commas in object and array literals. Trailing commas simplify adding and removing items to objects and arrays, since only the lines you are modifying must be touched. Another argument in favor of trailing commas is that it improves the clarity of diffs when an item is added or removed from an object or array:

Less clear:
```javascript
 const foo = {
-  bar: "baz",
-  qux: "quux"
+  bar: "baz"
 };
```

More clear:
```javascript
 const foo = {
   bar: "baz",
-  qux: "quux",
 };
```

```javascript
// INCORRECT
const foo = {
  bar: "baz",
  qux: "quux"
};

const foo = { bar: "baz", qux: "quux", };

const arr = [1,2,];

const arr = [
  1,
  2
];

foo({
  bar: "baz",
  qux: "quux"
});

// CORRECT
const foo = {
  bar: "baz",
  qux: "quux",
};

const foo = {bar: "baz", qux: "quux"};
const arr = [1,2];

const arr = [
  1,
  2,
];

foo({
  bar: "baz",
  qux: "quux",
});
```

### comma-spacing (**error**, *before*: false, *after*: true)

This rule enforces consistent spacing before and after commas in variable declarations, array literals, object literals, function parameters, and sequences.

```javascript
// INCORRECT
const foo = 1 ,bar = 2;
const arr = [1 , 2];
const obj = {"foo": "bar" ,"baz": "qur"};
foo(a ,b);
new Foo(a , b);
function foo(a ,b){}
a ,b

// CORRECT
const foo = 1, bar = 2, baz = 3;
const arr = [1, 2];
const obj = {"foo": "bar", "baz": "qur"};
foo(a, b);
new Foo(a, b);
function foo(a, b){}
a, b
```

### comma-style (**error**, *last*)

This rule enforce consistent comma style in array literals, object literals, and variable declarations.

```javascript
// INCORRECT
const foo = 1
,
bar = 2;

const foo = 1
  , bar = 2;

const foo = ["apples"
           , "oranges"];

function bar() {
  return {
    "a": 1
    ,"b:": 2
  };
}

// CORRECT
const foo = 1, bar = 2;

const foo = 1,
  bar = 2;

const foo = ["apples",
           "oranges"];

function bar() {
  return {
    "a": 1,
    "b:": 2,
  };
}
```

### computed-property-spacing (**error**, *never*)

This rule enforces consistent spacing inside computed property brackets.

It disallows spaces between the brackets and the values inside of them. This rule does not apply to brackets that are separated from the adjacent value by a newline.

```javascript
// INCORRECT
obj[foo ]
obj[ 'foo']
const x = {[ b ]: a}
obj[foo[ bar ]]

// CORRECT
obj[foo]
obj['foo']
const x = {[b]: a}
obj[foo[bar]]
```

### consistent-this (**error**, *'that'*)

This rule enforces two things about variables with the designated alias names for `this`. There are many commonly used aliases for `this` such as `that`, `self` or `me`. We stick to the default value `that`.

```javascript
// INCORRECT
function () {
  const self = this;
  someLibrary('button').click(function(event) {
    // here, "this" may be the HTMLElement where the click event occurred
    self.setValue(event.target.value);
  });
}
// CORRECT
function () {
  const that = this;
  someLibrary('button').click(function(event) {
    // here, "this" may be the HTMLElement where the click event occurred
    that.setValue(event.target.value);
  });
}
```

### eol-last (**error**, *always*)

This rule enforces at least one newline at the end of non-empty files.

### func-call-spacing (**error**, *never*)

This rule disallows spaces between the function name and the opening parenthesis that calls it.

```javascript
// INCORRECT
fn ();

fn
();

// CORRECT
fn();
```

### indent (**error**, 2, *SwitchCase*: 1)

This rule enforces a consistent indentation style. we use 2 spaces for indentation, even for `case` clauses in `switch` statements.

```javascript
// INCORRECT
if (a) {
    b = c;
    function foo(d) {
        e = f;
    }
}

switch(a){
case "a":
    break;
case "b":
    break;
}

// CORRECT
if (a) {
  b = c;
  function foo(d) {
    e = f;
  }
}

switch(a){
  case "a":
    break;
  case "b":
    break;
}
```

### jsx-quotes (**error**, *prefer-double*)

This rule enforces the consistent use of double quotes in JSX attributes.

```javascript
// INCORRECT
<a b='c' />

// CORRECT
<a b="c" />
```

### key-spacing (**error**, *beforeColon*: false, *afterColon*: true)

This rule enforces consistent spacing between keys and values in object literal properties. In the case of long lines, it is acceptable to add a new line wherever whitespace is allowed. Requires exactly one space after colons.

```javascript
// INCORRECT
const obj = { foo : 42 };
const obj = { foo :42 };

const obj = {
  someLongKey: 42,
  foo:         10,
};

// CORRECT
const obj = { foo: 42 };

const obj = {
  someLongKey: 42,
  foo: 10,
};
```

### keyword-spacing (**error**, *before*: true, *after*: true)

This rule enforces consistent spacing around keywords and keyword-like tokens. Requires one space before and after keywords

```javascript
// INCORRECT
if (foo) {
  //...
}else if (bar) {
  //...
}else {
  //...
}

if(foo) {
  // ...
} else if(bar) {
  // ...
} else {
  // ...
}

// CORRECT
if (foo) {
  //...
} else if (bar) {
  //...
} else {
  //...
}
```

### linebreak-style (**error**, *unix*)

This rule enforces consistent line endings independent of operating system, VCS, or editor used across your codebase. We use only Unix line endings `\n`.

### max-len (**error**, *code*: 120, *tabWidth*: 2, *ignoreComments*: true, *ignoreUrls*: true, *ignoreStrings*: true, *ignoreTemplateLiterals*: true)

This rule enforces a maximum line length to increase code readability and maintainability. The length of a line is defined as the number of Unicode characters in the line. We defined maximum length of line to 120 chars, but we ignore lines that contain long strings or long comments.

### new-cap (**error**)

This rule requires constructor names to begin with a capital letter.

```javascript
// INCORRECT
const friend = new person();

// CORRECT
const friend = new Person();
```

### new-parens (**error**)

This rule requires parentheses when invoking a constructor with no arguments using the `new` keyword in order to increase code clarity.

```javascript
// INCORRECT
const person = new Person;

// CORRECT
const person = new Person();
```

### no-array-constructor (**error**)

This rule disallows Array constructors.

```javascript
// INCORRECT
const arr = Array(0, 1, 2);

const arr = new Array(0, 1, 2);

// CORRECT
const arr = [0, 1, 2];

const arr = Array(500);
```

### no-lonely-if (**error**)

This rule disallows if statements as the only statement in else blocks.

```javascript
// INCORRECT
if (foo) {
  // ...
} else {
  if (bar) {
    // ...
  }
}

// CORRECT
if (foo) {
  // ...
} else if (bar) {
  // ...
}
```

### no-mixed-spaces-and-tabs (**error**)

This rule disallows mixed spaces and tabs for indentation. We use only spaces for indentation

### no-multiple-empty-lines (**error**, *max*: 2)

This rule aims to reduce the scrolling required when reading through your code. It will warn when the maximum amount of empty lines has been exceeded.

### no-nested-ternary (**error**)

This rule disallows nested ternary expressions.

```javascript
// INCORRECT
const thing = foo ? bar : baz === qux ? quxx : foobar;
```

### no-new-object (**error**)

This rule disallows `Object` constructors.

```javascript
// INCORRECT
const myObject = new Object();

// CORRECT
const myObject = {};
```

### no-trailing-spaces (**error**)

This rule disallows trailing whitespace (spaces, tabs, and other Unicode whitespace characters) at the end of lines.

### no-unneeded-ternary (**error**)

This rule disallow ternary operators when simpler alternatives exist.

```javascript
// INCORRECT
const isYes = answer === 1 ? true : false;

const isNo = answer === 42 ? false : true;

// CORRECT
const isYes = answer === 1;

const isNo = answer !== 42;
```

### no-whitespace-before-property (**error**)

This rule disallows whitespace around the dot or before the opening bracket before properties of objects if they are on the same line.

```javascript
// INCORRECT
foo [bar];

foo. bar;

foo .bar;

foo. bar. baz;

foo. bar()
  .baz();

foo
  .bar(). baz();

// CORRECT
foo[bar];

foo.bar;

foo.bar.baz;

foo
  .bar
  .baz;

foo.bar().baz();

foo
  .bar()
  .baz();
```

### object-curly-spacing (**error**, *always*)

This rule enforce consistent spacing inside braces of object literals, destructuring assignments, and import/export specifiers. We use one space after `{` and before `}`. There is only one exception for empty object `{}`.

```javascript
// INCORRECT
const obj = {'foo': 'bar'};
const obj = {'foo': 'bar' };
const obj = { baz: {'foo': 'qux'}, bar};
const obj = {baz: { 'foo': 'qux' }, bar};
const obj = {'foo': 'bar'
};
const obj = {
  'foo':'bar'};
const {x} = y;
import {foo } from 'bar';

// CORRECT
const obj = {};
const obj = { 'foo': 'bar' };
const obj = { 'foo': { 'bar': 'baz' }, 'qux': 'quxx' };
const obj = {
  'foo': 'bar'
};
const { x } = y;
import { foo } from 'bar';
```

### one-var (**error**, *var*: never, *let*: never, *const*: never)
This rule enforces variables to be declared separately per function ( for `var`) or block (for `let` and `const`) scope.

```javascript
// INCORRECT
function foo() {
  const bar = true,
    baz = false;
  let qux,
    norf;
}

// CORRECT
function foo() {
  const bar = true;
  const baz = false;
  let qux;
  let norf;
}
```

### operator-linebreak (**error**, *before*)

This rule enforces a consistent linebreak style for operators. We place operator at the beggining of line.

```javascript
// INCORRECT
foo = 1 +
      2;

foo =
  5;

if (someCondition ||
  otherCondition) {
}

answer = everything ?
  42 :
  foo;

// CORRECT
foo = 1 + 2;
foo = 1
  + 2;

foo = 5;
foo
  = 5;

if (someCondition
  || otherCondition) {
}

answer = everything
  ? 42
  : foo;
```

### padded-blocks (**error**, 'never')

This rule disallows empty lines at the beginning and ending of block statements and classes.

```javascript
// INCORRECT
if (a) {

  b();

}

if (a) {

  b();
}

if (a) {
  b();

}

// CORRECT
if (a) {
  b();
}
```

### quote-props (**error**, *as-needed*)

This rule disallows quotes around object literal property names that are not strictly required.

```javascript
// INCORRECT
const object = {
  'foo': 'bar',
  'baz': 42,
  'true': 0,
  '0': 0,
  'qux-lorem': true,
};

// CORRECT
const object2 = {
  foo: 'bar',
  baz: 42,
  true: 0,
  0: 0,
  'qux-lorem': true,
};
```

### quotes (**error**, *single*, *allowTemplateLiterals*: true)

This rule enforces the consistent use of single quotes or backticks for template literals.

```javascript
// INCORRECT
const foo = "bar";

// CORRECT
const foo = 'bar';
```

### semi (**error**)

This rule enforces consistent use of semicolons.

```javascript
// INCORRECT
const foo = 'bar'
fn()

// CORRECT
const foo = 'bar';
fn();
```

### semi-spacing (**error**, *before*: false, *after*: true)

This rule aims to enforce spacing around a semicolon. This rule prevents the use of spaces before a semicolon in expressions.

```javascript
// INCORRECT
let foo ;
let foo;let bar;
throw new Error("error") ;
while (a) { break ; }
for (i = 0 ; i < 10 ; i++) {}
for (i = 0;i < 10;i++) {}

// CORRECT
let foo;
let foo; let bar;
throw new Error("error");
while (a) { break; }
for (i = 0; i < 10; i++) {}
for (;;) {}
foo();
```

### space-before-blocks (**error**, *always*)

This rule will enforce consistency of spacing before blocks.

```javascript
// INCORRECT
if (a){
  b();
}

function a(){}

for (;;){
  b();
}

try {} catch(a){}

class Foo{
  constructor(){}
}

// CORRECT
if (a) {
  b();
}

if (a) {
  b();
} else {
  c();
}


function a() {}

for (;;) {
  b();
}

try {} catch(a) {}
```

### space-before-function-paren (**error**, *never*)

This rule disallows any space followed by the `(` of arguments.

```javascript
// INCORRECT
function foo () {
  // ...
}

fn(foo);

// CORRECT
function foo() {
  // ...
}

fn(foo);
```
### space-in-parens (**never**, **never**)

This rule will enforce consistent spacing directly inside of parentheses, by disallowing spaces to the right of ( and to the left of ).

```javascript
// INCORRECT
foo( 'bar');
foo('bar' );
foo( 'bar' );

var foo = ( 1 + 2 ) * 3;
( function () { return 'bar'; }() );

// CORRECT
foo();

foo('bar');

var foo = (1 + 2) * 3;
(function () { return 'bar'; }());
```

### space-infix-ops (**error**)

This rule is aimed at ensuring there are spaces around infix operators.

```javascript
// INCORRECT
const foo = a+b;

const foo = (a=0) => { }

// CORRECT
const foo = a + b;

const foo = (a = 0) => { }
```

### spaced-comment (**error**, *always*)

This rule enforce that the `//` or `/*` must be followed by one whitespace.

```javascript
// INCORRECT
foo; //some comment

// CORRECT
foo; // some comment
```

## ECMAScript 6

### arrow-body-style (**error**, *as-needed*)

This rule enforces no braces in arrow function where they can be omitted.

```javascript
// INCORRECT
const foo = () => {
  return 0;
};

const foo = () => {
  return {
      bar: 0,
  };
}

// CORRECT
const foo = () => 0;

const foo = () => ({ bar: 0 });
```

### arrow-parens (**error**, *as-needed*)

This rule enforces omitting parens when there is only one argument.

```javascript
// INCORRECT
const foo = (bar) => 42;

// CORRECT
const foo = bar => 42;
```

### arrow-spacing (**error**)

This rule enforce spacing before and after an arrow function’s arrow `=>`.

```javascript
// INCORRECT
const foo = () =>42;
const foo = ()=>42;
const foo = ()=> 42;

// CORRECT
const foo = () => 42;
```

### constructor-super (**error**)

This rule is aimed to flag invalid/missing `super()` calls.

```javascript
// INCORRECT
class A {
  constructor() {
    super();  // This is a SyntaxError.
  }
}

class A extends B {
  constructor() { }  // Would throw a ReferenceError.
}

// Classes which inherits from a non constructor are always problems.
class A extends null {
  constructor() {
    super();  // Would throw a TypeError.
  }
}

class A extends null {
  constructor() { }  // Would throw a ReferenceError.
}

// CORRECT
class A {
  constructor() { }
}

class A extends B {
  constructor() {
    super();
  }
}
```

### generator-star-spacing (**error**, *before*)

This rule aims to enforce spacing before the `*` of generator functions.

```javascript
// INCORRECT
function* generator() {}
function * generator() {}

const anonymous = function* () {};
const anonymous = function * () {};

const shorthand = { * generator() {} };

// CORRECT
function *generator() {}

const anonymous = function *() {};

const shorthand = { *generator() {} };
```

### no-duplicate-imports (**error**)

This rules requires that all imports from a single module exists in a single `import` statement.

```javascript
// INCORRECT
import { merge } from 'module';
import something from 'another-module';
import { find } from 'module';

// CORRECT
import { merge, find } from 'module';
import something from 'another-module';
```

### no-new-symbol (**error**)

This rule is aimed at preventing the accidental calling of `Symbol` with the `new` operator.

```javascript
// INCORRECT
const foo = new Symbol('foo');

// CORRECT
const foo = Symbol('foo');
```

### no-this-before-super (**error**)

This rule is aimed to flag `this`/`super` keywords before `super()` callings.

```javascript
// INCORRECT
class A extends B {
  constructor() {
    this.a = 0;
    super();
  }
}

class A extends B {
  constructor() {
    this.foo();
    super();
  }
}

class A extends B {
  constructor() {
    super.foo();
    super();
  }
}

class A extends B {
  constructor() {
    super(this.foo());
  }
}

// CORRECT
class A {
  constructor() {
    this.a = 0; // OK, this class doesn't have an `extends` clause.
  }
}

class A extends B {
  constructor() {
    super();
    this.a = 0; // OK, this is after `super()`.
  }
}

class A extends B {
  foo() {
    this.a = 0; // OK. this is not in a constructor.
  }
}
```

### no-useless-constructor (**error**)

This rule flags class constructors that can be safely removed without changing how the class works.

```javascript
// INCORRECT
class A {
  constructor () {
  }
}

class A extends B {
  constructor (...args) {
    super(...args);
  }
}
```

### no-var (**error**)

This rule is aimed at discouraging the use of var and encouraging the use of const or let instead.

```javascript
// INCORRECT
var x = 'y';
var CONFIG = {};

// CORRECT
let x = 'y';
const CONFIG = {};
```

### object-shorthand (**error**, *always*)

This rule enforces that the object shorthand will be used whenever possible.

```javascript
// INCORRECT
const foo = {
  x: x,
  y: y,
  z: z,
};

const foo = {
  a: function() {},
  b: function() {},
};

// CORRECT
const foo = { x, y, z };

const foo = {
  a() {},
  b() {},
};
```

### prefer-const (**error**)

This rule is aimed at flagging variables that are declared using `let` keyword, but never reassigned after the initial assignment.

```javascript
// INCORRECT
// it's initialized and never reassigned.
let a = 3;
console.log(a);

let a;
a = 0;
console.log(a);

// `i` is redefined (not reassigned) on each loop step.
for (let i in [1, 2, 3]) {
  console.log(i);
}

// `a` is redefined (not reassigned) on each loop step.
for (let a of [1, 2, 3]) {
    console.log(a);
}

// CORRECT
// using const.
const a = 0;

// it's never initialized.
let a;
console.log(a);

// it's reassigned after initialized.
let a;
a = 0;
a = 1;
console.log(a);

// it's initialized in a different block from the declaration.
let a;
if (true) {
    a = 0;
}
console.log(a);

// it's initialized at a place that we cannot write a variable declaration.
let a;
if (true) a = 0;
console.log(a);

// `i` gets a new binding each iteration
for (const i in [1, 2, 3]) {
  console.log(i);
}

// `a` gets a new binding each iteration
for (const a of [1, 2, 3]) {
  console.log(a);
}

// `end` is never reassigned, but we cannot separate the declarations without modifying the scope.
for (let i = 0, end = 10; i < end; ++i) {
    console.log(a);
}
```

### prefer-rest-params (**error**)

This rule is aimed to flag usage of `arguments` variables.

```javascript
// INCORRECT
function foo() {
  console.log(arguments);
}

function foo(action) {
  const args = Array.prototype.slice.call(arguments, 1);
  action.apply(null, args);
}

// CORRECT
function foo(...args) {
  console.log(args);
}

function foo(action, ...args) {
  action(...args);
}
```

### prefer-spread (**error**)

This rule is aimed to flag usage of `Function.prototype.apply()` in situations where the spread operator could be used instead.

```javascript
// INCORRECT
foo.apply(undefined, args);
foo.apply(null, args);
obj.foo.apply(obj, args);

// CORRECT
foo(...args);
obj.foo(...args);
```

### prefer-template (**error**)

This rule is aimed to flag usage of `+` operators with strings.

```javascript
// INCORRECT
const str = "Hello, " + name + "!";
const str = "Time: " + (12 * 60 * 60 * 1000);

// CORRECT
const str = "Hello World!";
const str = `Hello, ${name}!`;
const str = `Time: ${12 * 60 * 60 * 1000}`;
```

### rest-spread-spacing (**error**)

This rule aims to enforce no whitespace between spread operators and their expressions.

```javascript
// INCORRECT
fn(... args)
[... arr, 4, 5, 6]

// CORRECT
fn(...args)
[...arr, 4, 5, 6]
```

### yield-star-spacing (**error**, *before*)

This rule enforces spacing before the `*` in `yield` expressions.

```javascript
// INCORRECT
function* generator() {
  yield* other();
}

function * generator() {
  yield * other();
}

// CORRECT
function *generator() {
  yield *other();
}
```

## React

These rules comes from [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react).

### react/forbid-prop-types (**error**, *forbid*: any, array, object)

This rule prevents vague prop types with more specific alternatives available (`any`, `array`, `object`).

```javascript
// INCORRECT
propTypes: {
  a: PropTypes.any,
  r: PropTypes.array,
  o: PropTypes.object
},
// CORRECT
propTypes: {
  a: PropTypes.boolean,
  r: PropTypes.arrayOf(PropTypes.string),
  o: PropTypes.shape({ foo: PropTypes.number })
},
```

### react/no-access-state-in-setState

This rule should prevent usage of `this.state` inside `setState` calls. Such usage of `this.state` might result in errors when two state calls are called in batch and thus referencing old state and not the current state.

```javascript
// INCORRECT
function increment() {
  this.setState({value: this.state.value + 1});
}

// CORRECT
function increment() {
  this.setState(prevState => ({value: prevState.value + 1}));
}
```

### react/no-children-prop (**error**)

Children should always be actual children, not passed in as a prop.

```javascript
// INCORRECT
<MyComponent children={<AnotherComponent />} />

// CORRECT
<MyComponent>
  <AnotherComponent />
</MyComponent>
```

### react/no-danger-with-children (**error**)

This rule helps prevent problems caused by using children and the dangerouslySetInnerHTML prop at the same time. React will throw a warning if this rule is ignored.

```javascript
// INCORRECT
<div dangerouslySetInnerHTML={{ __html: "HTML" }}>
  Children
</div>

// CORRECT
<div dangerouslySetInnerHTML={{ __html: "HTML" }} />

<div>
  Children
</div>
```

### react/no-deprecated (**error**)

Several methods are deprecated between React versions. This rule will warn you if you try to use a deprecated method.

```javascript
// INCORRECT
React.render(<MyComponent />, root);

React.unmountComponentAtNode(root);

React.findDOMNode(this.refs.foo);

React.renderToString(<MyComponent />);

React.renderToStaticMarkup(<MyComponent />);

React.createClass({ /* Class object */ });

const propTypes = {
  foo: PropTypes.bar,
};

import React, { PropTypes } from 'react';
```

### react/no-direct-mutation-state (**error**)

Never mutate `this.state` directly, as calling `setState()` afterwards may replace the mutation you made. Treat `this.state` as if it were immutable.

The only place that's acceptable to assign `this.state` is in a ES6 class component constructor.

```javascript
// INCORRECT
class Hello extends Component {
  componentDidMount() {
    this.state.name = this.props.name.toUpperCase();
  }
  render() {
    return <div>Hello {this.state.name}</div>;
  }
}

class Hello extends Component {
  constructor(props) {
    super(props)

    // Assign at instance creation time, not on a callback
    doSomethingAsync(() => {
      this.state.foo = 'bar';
    });
  }
}

// CORRECT
class Hello extends Component {
  componentDidMount() {
    this.setState({
      name: this.props.name.toUpperCase(),
    });
  }
  render() {
    return <div>Hello {this.state.name}</div>;
  }
}

class Hello extends Component {
  constructor(props) {
    super(props)
    this.state.foo = 'bar';
  }
}
```

### react/no-typos (**error**)

This rule checks whether the declared static class properties and lifecycle methods related to React components do not contain any typos.

### react/no-string-refs (**error**)

Currently, two ways are supported by React to refer to components. The first way, providing a string identifier, is now considered legacy in the official documentation. The documentation now prefers a second method -- referring to components by setting a property on the `this` object in the reference callback.

```javascript
// INCORRECT
<div ref="container">
  CHILDREN
</div>

// CORRECT
<div ref={component => this.containerRef = component}>
  CHILDREN
</div>
```

### react/no-will-update-set-state (**error**)

Updating the state during the componentWillUpdate step can lead to indeterminate component state and is not allowed.

```javascript
// INCORRECT
class Hello extends Component {
  componentWillUpdate() {
    this.setState({
      name: this.props.name.toUpperCase(),
    });
  }
  render() {
    return <div>Hello {this.state.name}</div>;
  }
}
```

### react/prop-types (**error**)

PropTypes improve the reusability of your component by validating the received data.

```javascript
// INCORRECT
class Hello extends Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

// CORRECT
class Hello extends Component {
  static propTypes = {
    name: PropTypes.string,
  }
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}
```

### react/react-in-jsx-scope (**error**)

When using JSX, `<a />` expands to `React.createElement('a').` Therefore the `React` variable must be in scope.

### react/require-render-return (**error**)

When writing the `render` method in a component it is easy to forget to return the JSX content. This rule will warn if the `return` statement is missing.

```javascript
// INCORRECT
class Hello extends React.Component {
  render() {
    <div>Hello</div>;
  }
}

// CORRECT
class Hello extends React.Component {
  render() {
    return (
      <div>Hello</div>
    );
  }
}
```

### react/self-closing-comp (**error**)

Components without children can be self-closed to avoid unnecessary extra closing tag.

```javascript
// INCORRECT
<Hello name="John"></Hello>;

// CORRECT
<Hello name="John" />
```

### react/sort-comp (**error**, *order*: static-methods, lifecycle, everything-else, /^render.+$/, render)

This rule ensures that the following order must be followed:

1. static methods and properties
2. lifecycle methods: displayName, propTypes, contextTypes, childContextTypes, mixins, statics,defaultProps, constructor, getDefaultProps, getInitialState, state, getChildContext, componentWillMount, componentDidMount, componentWillReceiveProps, shouldComponentUpdate, componentWillUpdate, componentDidUpdate, componentWillUnmount (in this order).
3. custom methods
4. render helpers methods
5. render method

## JSX

### react/jsx-boolean-value (**error**, *never*)

When using a boolean attribute in JSX, you can set the attribute value to `true` or omit the value. This rule will enforce attribute has a `true` value to keep consistency in your code.

```javascript
// INCORRECT
<Hello personal={true} />

// CORRECT
<Hello personal />
```

### react/jsx-closing-bracket-location (**error**, *line-aligned*)

Enforce the closing bracket location for JSX multiline elements. This rule enforce that closing bracket will be aligned with the line containing the opening tag.

```javascript
// INCORRECT
<Hello
  lastName="Smith"
  firstName="John" />;

<Hello
  lastName="Smith"
  firstName="John"
  />;

// CORRECT
<Hello firstName="John" lastName="Smith" />;

<Hello
  firstName="John"
  lastName="Smith"
/>;
```

### react/jsx-closing-tag-location (**error**)

This rule checks all JSX multiline elements with children (non-self-closing) and verifies the location of the closing tag. The expectation is that the closing tag is aligned with the opening tag on its own line.

```javascript
// INCORRECT
<Hello>
  World</Hello>

<Hello>
  World
  </Hello>

// CORRECT
<Hello>
  World
</Hello>

<Hello>World</Hello>
```

### react/jsx-curly-spacing (**error**, *never*)

This rule aims to maintain consistency around the spacing inside of JSX attributes and expressions inside element children. It disallows spaces inside of curly braces.

```javascript
// INCORRECT
<Hello name={ firstname } />;
<Hello name={ firstname} />;
<Hello name={firstname } />;

// CORRECT
<Hello name={firstname} />;
<Hello name={
  firstname
} />;
```

### react/jsx-equals-spacing (**error**, *never*)

This rule will enforce consistency of spacing around equal signs in JSX attributes, by disallowing one or more spaces before and after `=`.

```javascript
// INCORRECT
<Hello name = {firstname} />;
<Hello name ={firstname} />;
<Hello name= {firstname} />;

// CORRECT
<Hello name={firstname} />;
<Hello name />;
<Hello {...props} />;
```

### react/jsx-first-prop-new-line (**error**, *multiline*)

This rule checks whether the first property of all JSX elements is correctly placed. The first property should always be placed on a new line when the JSX tag takes up multiple lines.

```javascript
// INCORRECT
<Hello name="John"
    foo="bar"
/>
// CORRECT
<Hello name="John" foo="bar" />

<Hello
  name="John"
  foo="bar"
/>
```

### react/jsx-indent: (**error**, *2*)

This rule is aimed to enforce consistent indentation style of 2 spaces.

```javascript
// INCORRECT
<App>
    <Hello />
</App>

<App>
<Hello />
</App>

// CORRECT
<App>
  <Hello />
</App>
```

### react/jsx-key (**error**)

Warn if an element that likely requires a `key` prop--namely, one present in an array literal or an arrow function expression.

```javascript
// INCORRECT
data.map(x => <Hello>{x.value}</Hello>);

// CORRECT
data.map(x => <Hello key={x.id}>{x.value}</Hello>);
```

### react/jsx-no-bind (**error**, *ignoreRefs*: true)

A `bind` call or arrow function in a JSX prop will create a brand new function on every single render. This is bad for performance, as it will result in the garbage collector being invoked way more than is necessary. It may also cause unnecessary re-renders if a brand new function is passed as a prop to a component that uses reference equality check on the prop to determine if it should update.

```javascript
// INCORRECT
<div onClick={this.handleClick.bind(this)}>CLICK ME</div>
<div onClick={() => console.log('Hello!')}>CLICK ME</div>

// CORRECT
<div onClick={this.handleClick}>CLICK ME</div>
<div ref={c => this._div = c} />
```

### react/jsx-no-duplicate-props (**error**)

Creating JSX elements with duplicate props can cause unexpected behavior in your application.

```javascript
// INCORRECT
<Hello name="John" name="Doe" />;

// CORRECT
<Hello name="John" lastname="Doe" />;
```

### react/jsx-no-target-blank (**error**)

When creating a JSX element that has an `a` tag, it is often desired to have the link open in a new tab using the `target='_blank`'` attribute. Using this attribute unaccompanied by `rel='noreferrer noopener'`, however, is a severe security vulnerability ([see here for more details](https://mathiasbynens.github.io/rel-noopener)) This rules requires that you accompany all `target='_blank'` attributes with `rel='noreferrer noopener'`.

```javascript
// INCORRECT
<a target='_blank' href="http://example.com/">CLICK ME</a>

// CORRECT
<a target='_blank' rel='noopener noreferrer' href="http://example.com">CLICK ME</a>

<a target='_blank' href="relative/path/in/the/host">CLICK ME</a>

<a target='_blank' href="/absolute/path/in/the/host">CLICK ME</a>

<a href="http://example.com/">CLICK ME</a>
```

### react/jsx-pascal-case (**error**)

Enforces coding style that user-defined JSX components are defined and referenced in PascalCase.

Note that since React's JSX uses the upper vs. lower case convention to distinguish between local component classes and HTML tags this rule will not warn on components that start with a lower case letter.

```javascript
// INCORRECT
<Test_component />

<TEST_COMPONENT />

// CORRECT
<TestComponent />

<div />
```

## Import

These rules comes from [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)

### import/no-unresolved (**error**, *commonjs*: true, *amd*: true)

Ensures an imported module can be resolved to a module on the local filesystem, as defined by standard Node `require.resolve` behavior. This rule also report on unresolved modules in CommonJS `require('./foo')` calls and AMD `require(['./foo'], function (foo){...})` and `define(['./foo'], function (foo){...})`.

```javascript
import foo from './foo' // reports if './foo' cannot be resolved on the filesystem
```

### import/named (**error**)

Verifies that all named imports are part of the set of named exports in the referenced module.

For `export`, verifies that all named exports exist in the referenced module.

Note: for packages, the plugin will find exported names from `jsnext:main`, if present in `package.json`. Redux's npm module includes this key, and thereby is lintable, for example.

```javascript
// GIVEN FOLLOWING FILE
// ./foo.js
export const foo = 'bar';

// INCORRECT
import { notFoo } from './foo';

// CORRECT
import { foo } from './foo';
```

### import/default (**error**)

If a default import is requested, this rule will report if there is no default export in the imported module.

For ES7, reports if a default is named and exported but is not found in the referenced module.

Note: for packages, the plugin will find exported names from `jsnext:main`, if present in `package.json`. Redux's npm module includes this key, and thereby is lintable, for example.

```javascript
// INCORRECT
// ./foo.js
export function bar() {
  return 42;
}

// ./index.js
import bar from './foo';

// CORRECT
// ./foo.js
export default function() {
  return 42;
}

import bar from './foo';
```

### import/export (**error**)

Reports funny business with exports, like repeated exports of names or defaults.

### import/no-named-as-default (**error**)

Reports use of an exported name as the locally imported name of a default export.

Rationale: using an exported name as the name of the default export is likely a mistake only needed to import something and forgot the brackets (the case that is prompting this)

```javascript
// GIVEN FOLLOWING FILE
// ./foo.js
export const foo = 'foo';
export default 'bar';

// INCORRECT
import foo from './foo';

// CORRECT
import { foo } from './foo';

import bar from './foo';
```

### import/no-named-as-default-member (**error**)

Reports use of an exported name as a property on the default export.

Rationale: Accessing a property that has a name that is shared by an exported name from the same module is likely to be a mistake.

Named import syntax looks very similar to destructuring assignment. It's easy to make the (incorrect) assumption that named exports are also accessible as properties of the default export.

```javascript
// GIVEN FOLLOWING FILE
// ./foo.js
export default 'foo';
export const bar = 'baz';

// INCORRECT
import foo from './foo';
const bar = foo.bar;

import foo from './foo';
const { bar } = foo;

// CORRECT
import foo, { bar } from './foo';
```

### import/no-extraneous-dependencies (**error**)

Forbid the import of external modules that are not declared in the `package.json`'s `dependencies`, `devDependencies`, `optionalDependencies` or `peerDependencies`. The closest parent `package.json` will be used. If no `package.json` is found, the rule will not lint anything.

### import/first (**error**)

This rule reports any imports that come after non-import statements.

```javascript
// INCORRECT
import foo from './foo';
foo();
import bar from './bar';

// CORRECT
import foo from './foo';
import bar from './bar';

foo();
```

### import/no-duplicates (**error**)

Reports if a resolved path is imported more than once.

```javascript
// INCORRECT
import foo from './foo';
import { bar } from './foo';

// CORRECT
import foo, { bar } from './foo';
```

### import/no-namespace (**error**)

Reports if namespace import is used.

```javascript
// INCORRECT
import * as foo from './foo';

// CORRECT
import defaultExport from './foo'

import { a, b }  from './foo'
```

### import/extensions (**error**, *js*: never, *jsx*: never, *json*: never)

This rule never allows the use of the `.js`, `.jsx` and `.json` extension. File resolve algorithms allow you to omit the file extension within the import source path.

### import/newline-after-import (**error**)

Enforces having one or more empty lines after the last top-level import statement or require call.

```javascript
// INCORRECT
import foo from './foo';
foo();

// CORRECT
import foo from './foo';

foo();
```

### import/no-named-default (**error**)

Reports use of a default export as a locally named import.

Rationale: the syntax exists to import default exports expressively, let's use it.

```javascript
// INCORRECT
import { default as foo } from './foo';

// CORRECT
import foo from './foo';
```

### import/order' (**error**, *newlines-between*: always)

Enforce a convention in the order of require() / import statements. The --fix option on the command line automatically fixes problems reported by this rule.

More info: [link](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md)

```javascript
// INCORRECT
import index from './';
import fs from 'fs';
import sibling from './foo';
import path from 'path';

// CORRECT
import fs from 'fs';
import path from 'path';

import index from './';

import sibling from './foo';
```
