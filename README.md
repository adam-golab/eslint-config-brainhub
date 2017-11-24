# eslint-config-brainhub

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the Brainhub JavaScript style guide


## Installation

```
$ npm install --save-dev eslint eslint-config-brainhub
```


## Usage

Once the `eslint-config-brainhub` package is installed, you can use it by specifying `brainhub` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring) (Usually `.eslintrc` file in main directory).

```js
{
  "extends": "brainhub",
  "rules": {
    // Additional, per-project rules...
  }
}
```

## Rules

Some of the most important rules:

### semi (**error**)

We use semicolons. There is no exception.

### max-len (**error**, *code*: 120, *tabWidth*: 2, *ignoreComments*: true, *ignoreUrls*: true, *ignoreStrings*: true, *ignoreTemplateLiterals*: true)

We defined maximum length of line to 120 chars and we use 2 spaces for indentation.

### no-var (**error**)

We do not use `var`, instead we encourage the use of `const` or `let`.

### array-bracket-spacing (**error**, *never*)

We disallow spaces inside array brackets.

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

### object-curly-spacing (**error**, *always*)

We use one space after `{` and before `}`. There is only one exception for empty object `{}`.

```javascript
// CORRECT
const obj = { 'foo': 'bar' };
```

### brace-style (**error**, *1tbs*)

We use the one true brace style, which is one of the most common brace styles in JavaScript, in which the opening brace of a block is placed on the same line as its corresponding statement or declaration.

```javascript
// CORRECT
if (foo) {
  bar();
} else {
  baz();
}
```

### comma-dangle (**error**, *always-multiline*)

Enforces consistent use of trailing commas in object and array literals.

```javascript
// CORRECT
const foo = {
  bar: "baz",
  qux: "quux",
};

```

### curly (**error**)

Every block statement should be wrapped in curly braces.

```javascript
// CORRECT
if (foo) {
  bar();
}
```

### prefer-template (**error**)

For string concatenation we encourage to use template string.

```javascript
const str = `Hello, ${name}!`;
```

### no-global-assign (**error**)

We disallow modifications to read-only global variables.

### no-use-before-define (**error**)

Every identifier has to be declared before use.

### react/forbid-prop-types (**error**, *forbid*: any, array, object)

We dissalow use of `any`, `array` and `object` prop types.

### react/no-string-refs (**error**)

Currently, two ways are supported by React to refer to components. The first way, providing a string identifier, is now considered legacy in the official documentation. The documentation now prefers a second method -- referring to components by setting a property on the `this` object in the reference callback.

For description of all rules together with examples of incorrect and correct code see [RULES.md](RULES.md) file.

## License

Apache-2 © Brainhub
