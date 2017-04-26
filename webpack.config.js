module.exports =
{
    entry: './index',
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