const webpack = require('webpack')

module.exports = {
    mode:'development',
    entry:'./src/principal',
    output:{
        filename:'principal.js',
        path:__dirname + '/public'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader', // Adiciona css a DOM injetando a tag <style>
                    'css-loader' // Interpreta @impot, url()....
                ]

            }
        ]
    }
}