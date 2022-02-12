TypeScript Execa Run Async Command Preserve Colors Demo
===========================

使用`execa`调用命令，同时保持输出的颜色

```
npm install
npm run demo
```

报错：

```
Error [ERR_REQUIRE_ESM]: Must use import to load ES Module: /Volumes/SN550-2T/demos/typescript-execa-run-async-command-demo/node_modules/.pnpm/execa@6.0.0/node_modules/execa/index.js
require() of ES modules is not supported.
require() of node_modules/.pnpm/execa@6.0.0/node_modules/execa/index.js from /Volumes/SN550-2T/demos/typescript-execa-run-async-command-demo/hello.ts is an ES module file as it is a .js file whose nearest parent package.json contains "type": "module" which defines all .js files in that package scope as ES modules.
Instead rename index.js to end in .cjs, change the requiring code to use import(), or remove "type": "module" from /Volumes/SN550-2T/demos/typescript-execa-run-async-command-demo/node_modules/.pnpm/execa@6.0.0/node_modules/execa/package.json.

    at Module._extensions..js (internal/modules/cjs/loader.js:1085:13)

```
