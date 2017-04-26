# Source Map correction due to incorrectly set response headers

This is a demo of an out of alignment sourcemap. The probable cause of the issue is the sourcemap's response header content type is set to `Content-Type: application/json` instead of `Content-Type: application/json; charset=UTF-8`.

## How to test

1. `npm install` to install the dependencies (webpack and webpack-dev-server)

### Test working source map
1. `npm run serve`
2. Open http://localhost:8080 in Chrome
3. Debugger should open automatically and stop on `debugger`