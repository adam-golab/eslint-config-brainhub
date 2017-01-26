# eslint-config-brainhub
![codeship](https://codeship.com/projects/2b9b1450-c5dd-0134-564a-5aca8525b5fa/status?branch=master)

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the Brainhub JavaScript style guide


## Installation

```
$ npm install --save-dev eslint eslint-config-brainhub
```


## Usage

Once the `eslint-config-brainhub` package is installed, you can use it by specifying `brainhub` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "brainhub",
  "rules": {
    // Additional, per-project rules...
  }
}
```

## License

Apache-2 © Brainhub
