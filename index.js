var test1 = require('aaa');  // Resolves to window.aaa (See webpack.config.js externals property)

function init()
{
    debugger;                  // If Debugger stops here, sourcemap is good.
	console.log('Ok?', test1); // If Debugger stop here, sourcemap is out of alignment
}

init();