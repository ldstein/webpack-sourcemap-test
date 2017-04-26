# Source Map correction due to incorrectly set response headers

This is a demo of an out of alignment sourcemap. The probable cause of the issue is the sourcemap's response header content type is set to `Content-Type: application/json` instead of `Content-Type: application/json; charset=UTF-8`.

## How to test

1. `npm install` to install the dependencies (webpack and webpack-dev-server)

### Test working sourcemap

1. `npm run serve`
2. Open http://localhost:8080 in Chrome
3. Debugger window will open automatically and stop on line 5.

![Screenshot of Debugger](https://raw.githubusercontent.com/ldstein/webpack-sourcemap-test/master/doc/good.png)

### Test misaligned sourcemap

1. `npm run build-then-serve`
2. Open http://localhost:8080 in Chrome
3. Debugger window will open automatically and stop on line 6.

![Screenshot of Debugger](https://raw.githubusercontent.com/ldstein/webpack-sourcemap-test/master/doc/bad.png)

### Hypothesis

When webpack-dev-server responds to the request for `index.build.js.map`, the headers are different depending on where the sourcemap data resides:


Content-Type received when `index.build.js.map` is served from memory:

```
Content-Type: application/json; charset=UTF-8
```

Content-Type received when `index.build.js.map` is served from file-system

```
Content-Type: application/json
```

It's my suspicion the misalignment is caused by Chrome receiving a UTF-8 encoded sourcemap and parsing it as non-UTF8 text.


