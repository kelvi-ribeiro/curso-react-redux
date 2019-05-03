
const server = require('./config/server')
require('./config/database')
require('./config/routers')(server)