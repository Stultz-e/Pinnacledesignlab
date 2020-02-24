const path = require('path');

module.exports = {
    entry: './app/assets/scripts/App.js',
    output: {
        filename: 'App.js',
        path: path.resolve(__dirname, './app/temp/scripts')
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                },
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
};

/*Take a webpack for a spin using command npx webpack --config webpack.config.js in Your command line instead of using webpack command as at 8:53.

p.s. : if node doesn't recognize the npx command type this

npm i -g npx

and then follow the instructions above */

/* --config webpack.config.js */