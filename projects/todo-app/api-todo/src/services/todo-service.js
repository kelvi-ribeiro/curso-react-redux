const todo = require('../domain/todo')
todo.methods(['get','post','put','delete'])
todo.updateOptions({new:true,runValidators:true})

module.exports = todo