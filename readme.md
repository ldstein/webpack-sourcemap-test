# Source Map fix by adding BOM to generated sourcemap file

This is a demo of an out of alignment sourcemap.

If the JS and it's corresponding sourcemap are located within webpack-dev-server's virtual filesystem, breakpoints in Chrome Debugger displays properly.

If the JS and it's corresponding sourcemap are located on physical disk, breakpoints in Chrome Debugger are misaligned.

Testing environment:

- Chrome v58.0.3029.81
- MS Windows 10 Pro 14393.1066
- Chrome debugger cache disabled (debugger network tab  > Disable cache checked)

## Installation

1. `npm install` to install the dependencies (webpack and webpack-dev-server)

### Test working sourcemap

This will start webpack dev server.

1. `npm run build-good`
2. Open http://localhost:8080 in Chrome
3. Open Debugger (F12)
4. Refresh (F5)
5. Debugger will stop on line 5 (expected behaviour).

![Screenshot of Debugger](https://raw.githubusercontent.com/ldstein/webpack-sourcemap-test/master/doc/good.png)

### Test misaligned sourcemap

This will run webpack, start webpack-dev-server which then serves the previously generated files.

1. `npm run build-bad`
2. Open http://localhost:8080 in Chrome
3. Open Debugger (F12)
4. Refresh (F5)
5. Debugger window will open automatically and stop on line 6 (unexpected behaviour).

![Screenshot of Debugger](https://raw.githubusercontent.com/ldstein/webpack-sourcemap-test/master/doc/bad.png)

