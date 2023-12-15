# Polyfill-Global-This

A polyfill for `globalThis` in runtimes that don't support it. Just need to import the library at the top of the code entry.

----

向不支持 `globalThis` 的运行环境，全局注入 `globalThis`。只需在代码入口的顶部导入这个库。

## Usage

**NPM**

```bash
npm i polyfill-global-this
```

**YARN**

```bash
yarn add polyfill-global-this
```

### Example

```javascript
import 'polyfill-global-this';

// globalThis is now available
console.log(typeof globalThis);

// in browser, globalThis is the same as window
console.log(globalThis === window);

// in Node.js, globalThis is the same as global
console.log(globalThis === global);

// in React Native and browser, globalThis is the same as self
console.log(globalThis === self);
```
