// The only difference between the two configs is the 'externals' property.

module.exports =
[
    {
        entry: './index.js',
        devtool: 'cheap-module-source-map',
        externals:
        {
            './aaa': 'urlUtil'
        },
        output:
        {
            filename : 'bad.build.js'
        },
        devServer:
        {
            hot:false,
            inline:false
        }
    },
    {
        entry: './index.js',
        devtool: 'cheap-module-source-map',
        output:
        {
            filename : 'good.build.js'
        }
    }
];