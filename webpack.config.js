
module.exports = {
    mode: 'development',

    entry: __dirname + '/client/index.jsx',

    module: {
        rules: [
            {
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-react", "@babel/preset-env"]
                         }
                 }
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,  
                use: [{
                    loader: 'url-loader',
                    options: { 
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'images/[hash]-[name].[ext]'
                    } 
                }]
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
    
        ]
    },

    output: {
        path: __dirname + '/public/dist',
        filename: 'bundle.js'
    }
}