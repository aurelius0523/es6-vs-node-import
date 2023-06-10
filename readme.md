## Overview

### nodejs

- `require` and `module.exports` are nodejs keywords, not javascript
- when using nodejs native keywords, there is no need to include `'type': module` in `package.json`

### javascript (es6)

- `import` and `export` are javascript keywords, not nodejs.
- Therefore you'll need to set `'type': module` in `package.json`

### commonjs

- commonjs is already incorporated inside Nodejs, where the keywords `module.exports` and `require` are used:

  ```javascript
  const myModule = require("store/customer");
  function main() {
    myModule.listCustomer();
  }

  module.exports = main;
  ```
