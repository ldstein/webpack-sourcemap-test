// This file exists just to give webpack-dev-server something to chew on.
// We really want to serve the previously generated js files.

module.exports =
{
    entry: './dev-server',
    output:
    {
        filename : 'dev-server.build.js'
    }
};