module.exports =
{
    entry: '.',
    devtool: 'cheap-module-source-map',
    externals:
    {
        aaa: 'aaa'
    },
    output:
    {
        filename : 'index.build.js'
    }
};