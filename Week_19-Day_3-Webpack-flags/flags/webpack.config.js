
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    module:{
        rules:[ //Aqui voy a caragar todos los loader que necesito para que webpack trabaje como quiera
            {
                test: /\.html$/, // expresion regular ---> busca todos los archivos que terminen en .html
                use : [
                    {
                        loader: "html-loader", //Este va a traducir todo el html para que webpack lo entienda
                        options: {minimize:true}
                    }
                ]
                //test ---> que tengo que buscar
                //use ----> de lo que encontre que loader voy a aplicar
            },
            {
                test: /\.js$/, //Va buscar todos los archivos js en mi proyecto
                exclude: /node_modules/, //Le digo que no busque ne la carpeta de node_modules
                use:{
                    loader: "babel-loader"
                }

            },
            {
                test:  /\.(png|jpg|svg|gif|jpeg)$/,
                use:[
                    "file-loader"
                    // {
                    //     loader:'file-loader'
                    // },
                    // {
                    //     loader:'my-otro-loader'
                    // }
                ]
            },
            {
                test: /\.scss$/, //Va buscar todos los archivos js en mi proyecto
                use:[//El órden de los loader es importante
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:"./src/index.html", //Que archivo de html va a ser el base para mi proyecto
            filename:"./index.html"// Que unico archivo de html se va a generar
        }),
        new MiniCssExtractPlugin({
            filename:"[name].css",
            chunkFilename:"[id].css"// Solo es el caso si hay mucho css
        }),
    ]

}