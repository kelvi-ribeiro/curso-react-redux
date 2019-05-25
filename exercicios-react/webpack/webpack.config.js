const webpack = require('webpack')
const miniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode:'development',
    entry:'./src/principal',
    output:{
        filename:'principal.js',
        path:__dirname + '/public'
    },
    plugins:[
        new miniCssExtractPlugin({
          filename:'estilo.css'  
        })
    ],
    module:{
        rules:[
            {
                test:/\.s?[ac]ss$/,
                use:[
                    miniCssExtractPlugin.loader, // Estratégia diferente do abaixo, por isso está comentado
                    //'style-loader', // Adiciona css a DOM injetando a tag <style>
                    'css-loader', // Interpreta @impot, url()....
                    'sass-loader'
                ]

            }
        ]
    }
}