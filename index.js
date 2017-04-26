var globals = require('./globals');
var urlUtil = require('./aaa');

function init()
{
    debugger;                                              // If Debugger stops here, sourcemap is good.
	console.log('globals:', globals, 'urlUtil:', urlUtil); // If Debugger stop here, sourcemap is out of alignment
}

init();