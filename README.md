# ship-components-eslint-rules
[eslint](http://eslint.org/) rules used in ship-components and Ship applications. Includes support for [Babel](https://github.com/babel/babel-eslint) and [React](https://github.com/yannickcr/eslint-plugin-react).

[![npm](https://img.shields.io/npm/v/eslint-config-ship-components.svg?maxAge=2592000)](https://www.npmjs.com/package/eslint-config-ship-components)
[![peerDependencies](https://img.shields.io/david/peer/ship-components/ship-components-eslint-rules.svg?style=flat)](https://david-dm.org/ship-components/ship-components-eslint-rules?type=peer)

# Usage
## Install

`npm install eslint-config-ship-components@latest --save-dev`

## Install peer dependencies

You can see them by running: `npm info eslint-config-ship-components@latest peerDependencies`

Linux/OSX users can simply run the following command to install them automatically.
```shell
(
  export PKG=eslint-config-ship-components;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

## Setup .eslintrc
Add `"extends": "ship-components",` to your .eslintrc

```js
{
  "extends" : "ship-components",

  // Additional rules
  "rules": {

  }
}
```

# Development

1. Clone this repo
2. Run `npm link` from the repository
3. In you the project folder you want to test in run `npm link eslint-config-ship-components`
4. Add to your `.eslintrc` like normal

# History
* 1.0.0 - Initial commit

# License
MIT License

Copyright (c) 2017 SHIP

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
