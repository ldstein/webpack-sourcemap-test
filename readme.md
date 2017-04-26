# Source Map fix by adding BOM to generated sourcemap file

This is a demo of an out of alignment sourcemap which is fixed by adding a UTF-8 BOM to the generated sourcemap file.

My testing environment:

- Chrome v58.0.3029.81
- MS Windows 10 Pro 14393.1066
- Chrome debugger cache disabled (debugger network tab  > Disable cache checked)

## Installation

1. `npm install` to install the dependencies (webpack and webpack-dev-server)

### Test working sourcemap

This will run webpack, **add BOM to the generated sourcemap** then start a simple web server to test the results.

1. `npm run build-good`
2. Open http://localhost:8080 in Chrome
3. Debugger window will open automatically and stop on line 5.

![Screenshot of Debugger](https://raw.githubusercontent.com/ldstein/webpack-sourcemap-test/master/doc/good.png)

### Test misaligned sourcemap

This will run webpack, then start a simple web server to test the results.

1. `npm run build-bad`
2. Open http://localhost:8080 in Chrome
3. Debugger window will open automatically and stop on line 6.

![Screenshot of Debugger](https://raw.githubusercontent.com/ldstein/webpack-sourcemap-test/master/doc/bad.png)

### Conclusion

Is is possible sourcemaps should be exported by Webpack as UTF-8 with BOM?

