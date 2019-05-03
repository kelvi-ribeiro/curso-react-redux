const express = require('express')
module.exports = function(server){
    // URL Base para todas as rotas
    const router = express.Router()
    server.use('/api', router )

     // Rotas de Ciclo da Pagamento

     const billingCycleService = require('../api/services/billingCycleService')

     billingCycleService.register(router, '/billingCycles')
}