var someModule;

window.urlUtil = 'Hello World';
someModule     = require('./aaa');

function init()
{
    debugger;                // If Debugger stops here, sourcemap is good.
	console.log(someModule); // If Debugger stop here, sourcemap is out of alignment
}

init();