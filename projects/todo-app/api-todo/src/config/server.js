const port = 3000

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./handle-cors')
const paginationParams = require('./handle-pagination-params')

server.use(bodyParser.urlencoded({ extended:true }))
server.use(bodyParser.json())
server.use(allowCors)
server.use(allowCors)

server.use(function(req,res,next){    
    req.query.skip = parseInt(req.query.skip)    
    req.query.limit = parseInt(req.query.limit)
    next()
})

server.listen(port,function(){
    console.log('BACKEND is running on port:' + port)
})

module.exports = server