var path = require('path');

// Normalize sourcemap ids
function devtoolModuleFilenameTemplate(info)
{
    id = info.resourcePath;

    if (id.indexOf('webpack/bootstrap') == 0)
        id = 'webpack/bootstrap';
    else
    if (id.indexOf('external') == 0 || id.indexOf('./aaa.js') == 0)
        id = '(substituted module)';

    console.log('source', info.resourcePath, '>>>', id);

    return id;
}

// When ./aaa is defined as an external, make the code added to webpack identical to the 'aaa.js' located in this package
function externalize_aaa(context, request, callback)
{
    // Ensure code added to bundle is identical to ./aaa.js
    if (request == './aaa')
        return callback(null, 'var window.urlUtil');

    callback();
}

var entryFile     = './index.js';
var sourceMapType = 'cheap-module-source-map';

module.exports =
[
    // Treat './aaa' as an external (resolve to window.urlUtil)
    {
        entry: entryFile,
        devtool: sourceMapType,
        externals:
        [
            externalize_aaa
        ],
        output:
        {
            filename : 'index.build.js',
            path: path.resolve(__dirname, 'build-bad'),
            devtoolModuleFilenameTemplate:devtoolModuleFilenameTemplate
        },
        devServer:
        {
            hot:false,
            inline:false
        }
    },
    // Normal build where all dependencies are included
    {
        entry: entryFile,
        devtool: sourceMapType,
        output:
        {
            filename : 'index.build.js',
            path: path.resolve(__dirname, 'build-good'),
            devtoolModuleFilenameTemplate:devtoolModuleFilenameTemplate
        }
    }
];